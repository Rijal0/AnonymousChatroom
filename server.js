const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*', // Allow all origins for development; restrict in production
    methods: ['GET', 'POST']
  }
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html for all routes to support room URLs
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Socket.io connection
io.on('connection', (socket) => {
  const room = socket.handshake.query.room || 'default';
  socket.join(room);
  console.log(`User connected to room: ${room}`);

  socket.on('join', (username) => {
    io.to(room).emit('user joined', username);
  });

  socket.on('chat message', (data) => {
    if (data.text && data.username) {
      io.to(room).emit('chat message', data);
    }
  });

  socket.on('typing', (username) => {
    socket.to(room).emit('typing', username);
  });

  socket.on('stop typing', () => {
    socket.to(room).emit('stop typing');
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected from room: ${room}`);
  });

  socket.on('error', (err) => {
    console.error('Socket error:', err);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});