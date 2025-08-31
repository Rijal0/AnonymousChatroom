🟢 ANONYMOUS CHATROOM

A real-time, anonymous chatroom web application built with Node.js, Express, Socket.io, and TailwindCSS. Users can join unique chat rooms without signing up, using randomly generated usernames, and communicate instantly. Messages vanish upon page refresh, and no user data is stored.

✨ Features

Anonymity: No sign-up/login; random usernames (e.g., User1234) are assigned.

Real-Time Messaging: Instant message delivery powered by Socket.io.

Unique Room URLs: Share chat rooms via URL query parameters (e.g., ?room=abc123).

Responsive Design: Works on mobile and desktop devices.

Dark/Light Mode: Toggle between themes; preference stored in local storage.

Typing Indicator: Shows when other users are typing.

Message Styling: Usernames, timestamps, and pastel-colored message bubbles.

Invite Link: Copy and share room URLs easily.

Privacy-Focused: No database, no IP logging; messages vanish on refresh.

Security: Input sanitization prevents XSS attacks.

🛠️ Tech Stack

Frontend: HTML, TailwindCSS, Vanilla JavaScript

Backend: Node.js, Express.js

WebSockets: Socket.io for real-time communication

Styling: TailwindCSS with custom animations

📁 Folder Structure
anonymous-chatroom/
├── package.json
├── server.js
└── public/
    ├── index.html
    ├── client.js
    └── styles.css

⚡ Prerequisites

Node.js (v16+)

npm (v8+)

🚀 Setup Instructions (Local)
1️⃣ Clone the Repository
git clone https://github.com/your-username/anonymous-chatroom.git
cd anonymous-chatroom

2️⃣ Install Dependencies
npm install

3️⃣ Start the Server
npm start

4️⃣ Access the Chatroom

Open http://localhost:3000
 in your browser.

To join a specific room:

http://localhost:3000/?room=<room_id>

5️⃣ Test Features

Open multiple tabs with the same room URL.

Toggle dark/light mode.

Copy invite link to share.

Type to trigger the typing indicator.

🌐 Deployment
Vercel

Push repository to GitHub

Import repository into Vercel

Configure:

Framework: Node.js

Build Command: None

Output Directory: .

Run Command: npm start

Deploy and access the provided URL

Render / DigitalOcean

Create a Node.js app

Start command: npm start

Deploy with SSL enabled

HTTPS

Use platform SSL (Vercel/Render) or configure Nginx + Let’s Encrypt

🔒 Security & Privacy

No Data Storage: Messages vanish on refresh

No IP Logging: Server does not collect IPs or device data

XSS Prevention: Inputs sanitized

⚠️ Legal Disclaimer

This project is for educational/demo purposes only. Hosting anonymous chatrooms may be subject to local laws. Users are responsible for compliance. Developers are not liable for misuse or legal consequences.

🛠️ Troubleshooting

Messages Not Sending: Check console & ensure server running

Dark/Light Mode Issues: Ensure TailwindCSS loads & local storage enabled

Room Issues: Confirm all tabs use same ?room=<id> URL

🤝 Contributing

Fork the repo, create a branch, and submit a pull request with your changes.

📄 License

MIT License. See LICENSE file for details.
