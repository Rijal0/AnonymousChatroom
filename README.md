Anonymous Chatroom

A real-time, anonymous chatroom web application built with Node.js, Express, Socket.io, and TailwindCSS. Users can join unique chat rooms without signing up, using randomly generated usernames, and communicate instantly with others in the same room. The application prioritizes privacy by not storing user data or logging IPs, with messages vanishing upon page refresh.

Features





Anonymity: No sign-up or login required; users are assigned random usernames (e.g., User1234).



Real-Time Messaging: Powered by Socket.io for instant message delivery within rooms.



Unique Room URLs: Create and share unique chat rooms via URL query parameters (e.g., ?room=abc123).



Responsive Design: Works seamlessly on mobile and desktop devices.



Dark/Light Mode: Toggle between themes with persistent user preference via local storage.



Typing Indicator: Shows when other users are typing in real-time.



Message Styling: Messages display usernames, timestamps, and pastel-colored usernames in rounded bubbles.



Invite Link: Easily copy and share room URLs to invite others.



Privacy-Focused: No database, no IP logging, and messages are not persisted.



Security: Input sanitization to prevent XSS attacks.

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





Clone the Repository:

git clone https://github.com/your-username/anonymous-chatroom.git
cd anonymous-chatroom



Install Dependencies:

npm install



Start the Server:

npm start



Access the Chatroom:





Open http://localhost:3000 in a browser.



To join a specific room, append ?room=<room_id> to the URL (e.g., http://localhost:3000/?room=abc123).



Test Features:





Open multiple browser tabs with the same room URL to test messaging.



Use the "Toggle Mode" button to switch between dark and light themes.



Click "Copy Invite Link" to share the room URL.



Type in the input field to trigger the typing indicator.

Deployment

The application is designed for easy deployment on platforms like Vercel, Render, or DigitalOcean.

Vercel





Push the repository to GitHub.



Import the repository into Vercel.



Configure:





Framework: Node.js



Build Command: None



Output Directory: .



Run Command: npm start



Deploy and access the provided URL.

Render/DigitalOcean





Create a new Node.js app.



Set the start command to npm start.



Deploy and ensure SSL is enabled for HTTPS.

HTTPS





Use platform-provided SSL (e.g., Vercel, Render) or configure a reverse proxy like Nginx with Let’s Encrypt for production.

Security and Privacy





No Data Storage: Messages are not stored; they vanish on page refresh.



No IP Logging: The server does not collect or log IP addresses or device data.



XSS Prevention: User inputs are sanitized to prevent cross-site scripting attacks.

Legal Disclaimer

This project is intended for educational and demonstration purposes only. Hosting anonymous chatrooms may be subject to local laws and regulations, particularly regarding user-generated content. In some jurisdictions, such as Nepal, authorities may block websites hosting content deemed inappropriate (e.g., obscene or disruptive material). Users are responsible for ensuring compliance with local laws when deploying or using this application. The developers are not liable for any misuse or legal consequences arising from the use of this software.

Troubleshooting





Messages Not Sending:





Check browser console (F12 → Console) for Socket.io errors.



Ensure the server is running (npm start) and accessible at http://localhost:3000.



Dark/Light Mode Not Working:





Verify TailwindCSS is loading (https://cdn.tailwindcss.com).



Ensure local storage is enabled in your browser.



Room Issues:





Confirm all tabs use the same ?room=<id> URL parameter.

Contributing

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request with your changes.

License

This project is licensed under the MIT License. See the LICENSE file for details.
