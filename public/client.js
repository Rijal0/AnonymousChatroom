document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  let room = urlParams.get('room') || generateRoomId();
  if (!urlParams.get('room')) {
    window.history.replaceState(null, '', `?room=${room}`);
  }

  const username = `User${Math.floor(Math.random() * 10000)}`;
  const colors = ['text-red-400', 'text-blue-400', 'text-green-400', 'text-yellow-400', 'text-purple-400', 'text-pink-400'];
  const userColor = colors[Math.floor(Math.random() * colors.length)];

  const socket = io({
    query: { room },
    transports: ['websocket']
  });

  const chatContainer = document.getElementById('chat-container');
  const messageInput = document.getElementById('message-input');
  const sendButton = document.getElementById('send-button');
  const typingIndicator = document.getElementById('typing-indicator');
  const toggleMode = document.getElementById('toggle-mode');
  const newRoom = document.getElementById('new-room');
  const copyLink = document.getElementById('copy-link');

  let typingTimeout;
  let isTyping = false;
  let typingUsers = new Set();

  function generateRoomId() {
    return Math.random().toString(36).substring(2, 10);
  }

  function escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/`/g, "&#x60;");
  }

  function appendMessage(msg, isOwn = false) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('flex', 'flex-col', isOwn ? 'items-end' : 'items-start', 'animate-slide-in');
    const bubble = document.createElement('div');
    bubble.classList.add('max-w-xs', 'p-3', 'rounded-lg', isOwn ? 'bg-blue-500' : 'bg-message-bg-light', 'dark:bg-message-bg-dark', 'text-white', isOwn ? '' : 'dark:text-gray-100', 'shadow-sm');
    const userSpan = document.createElement('span');
    userSpan.classList.add('font-bold', msg.color);
    userSpan.textContent = msg.username;
    const timeSpan = document.createElement('span');
    timeSpan.classList.add('text-xs', 'ml-2', 'text-gray-300');
    timeSpan.textContent = msg.timestamp;
    const textP = document.createElement('p');
    textP.innerHTML = escapeHtml(msg.text);
    bubble.appendChild(userSpan);
    bubble.appendChild(timeSpan);
    bubble.appendChild(textP);
    messageElement.appendChild(bubble);
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  socket.on('connect', () => {
    console.log('Connected to server');
    socket.emit('join', username);
  });

  socket.on('connect_error', (err) => {
    console.error('Connection error:', err);
    alert('Failed to connect to server. Please refresh the page.');
  });

  socket.on('user joined', (joinedUsername) => {
    appendMessage({
      username: 'System',
      text: `${joinedUsername} has joined the chat`,
      timestamp: new Date().toLocaleTimeString(),
      color: 'text-gray-500'
    });
  });

  socket.on('chat message', (data) => {
    appendMessage({
      username: data.username,
      text: data.text,
      timestamp: data.timestamp,
      color: data.color
    });
  });

  socket.on('typing', (typingUsername) => {
    typingUsers.add(typingUsername);
    updateTypingIndicator();
  });

  socket.on('stop typing', () => {
    typingUsers.clear();
    updateTypingIndicator();
  });

  function updateTypingIndicator() {
    if (typingUsers.size > 0) {
      typingIndicator.textContent = `${Array.from(typingUsers).join(', ')} is typing...`;
      typingIndicator.classList.remove('hidden');
    } else {
      typingIndicator.classList.add('hidden');
    }
  }

  function sendMessage() {
    const text = messageInput.value.trim();
    if (!text) {
      alert('Please enter a message.');
      return;
    }
    const data = {
      username,
      text,
      timestamp: new Date().toLocaleTimeString(),
      color: userColor
    };
    socket.emit('chat message', data);
    appendMessage(data, true);
    messageInput.value = '';
    socket.emit('stop typing');
    isTyping = false;
  }

  sendButton.addEventListener('click', sendMessage);

  messageInput.addEventListener('input', () => {
    if (!isTyping) {
      isTyping = true;
      socket.emit('typing', username);
    }
    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(() => {
      isTyping = false;
      socket.emit('stop typing');
    }, 1000);
  });

  messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  function updateModeButtonText() {
    toggleMode.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
  }

  toggleMode.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
    updateModeButtonText();
  });

  // Initialize mode based on local storage
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
  }
  updateModeButtonText();

  newRoom.addEventListener('click', () => {
    window.location.href = `?room=${generateRoomId()}`;
  });

  copyLink.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('Invite link copied to clipboard!');
    }).catch(() => {
      alert('Failed to copy link. Please copy the URL manually.');
    });
  });
});