ANONYMOUS CHATROOM

A real-time, anonymous chatroom web application built with Node.js, Express, Socket.io, and TailwindCSS. Users can join unique chat rooms without signing up, using randomly generated usernames, and communicate instantly. Messages vanish upon page refresh, and no user data is stored.

Features
Anonymity: No sign-up or login required; users are assigned random usernames (e.g., User1234).
Real-Time Messaging: Powered by Socket.io for instant message delivery within rooms.
Unique Room URLs: Create and share chat rooms via URL query parameters (e.g., ?room=abc123).
Responsive Design: Works on mobile and desktop devices.
Dark/Light Mode: Toggle between themes; preference stored in local storage.
Message Styling: Messages display usernames, timestamps, and pastel-colored usernames in rounded bubbles.
Invite Link: Easily copy and share room URLs to invite others.
Privacy-Focused: No database, no IP logging; messages vanish on refresh.

Tech Stack
Frontend: HTML, TailwindCSS, Vanilla JavaScript
Backend: Node.js, Express.js
WebSockets: Socket.io for real-time communication
Styling: TailwindCSS with custom animations

Folder Structure
anonymous-chatroom/
├── package.json
├── server.js
└── public/
    ├── index.html
    ├── client.js
    └── styles.css

Prerequisites
Node.js (v16 or higher)
npm (v8 or higher)

Setup Instructions (Local)
1. Clone the Repository
git clone https://github.com/Rijal0/AnonymousChatroom.git
cd anonymous-chatroom

2. Install Dependencies
npm install

3. Start the Server
npm start

4. Access the Chatroom

Open http://localhost:3000
 in a browser.

To join a specific room, append ?room=<room_id> to the URL:

http://localhost:3000/?room=abc123

5. Test Features

Open multiple browser tabs with the same room URL to test messaging.

Toggle dark/light mode.

Copy invite link to share the room URL.

Type in the input field to trigger the typing indicator.

Deployment

Push repository to GitHub
Render / DigitalOcean


Legal Disclaimer

This project is intended for educational and demonstration purposes only. Hosting anonymous chatrooms may be subject to local laws and regulations. Users are responsible for ensuring compliance with local laws. Developers are not liable for misuse or legal consequences.


Contributing

Contributions are welcome! Fork the repository, create a feature branch, and submit a pull request with your changes.

License

This project is licensed under the MIT License. See the LICENSE file for details.
