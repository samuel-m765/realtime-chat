
#  Real-Time Chat Application (Socket.io)

## Project Overview
This project is a **real-time chat application** built using **Node.js**, **Express**, and **Socket.io**.  
It enables users to send and receive messages instantly through WebSocket connections — demonstrating bidirectional, low-latency communication between clients and the server.

This project was developed as part of **Codveda Technologies Internship — Task 2: WebSockets for Real-Time Communication (Level 3 Advanced)**.

---

##  Features

-  Real-time chat between multiple users  
-  Bidirectional WebSocket communication using **Socket.io**  
-  User-specific message display with usernames  
- ⚡ Instant message broadcasting (no page reloads)  
-  In-memory message persistence (optional)  
-  Simple, single-folder full-stack setup (Express backend + HTML frontend)

---

##  Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | HTML, CSS, JavaScript |
| **Backend** | Node.js, Express |
| **Real-Time Engine** | Socket.io |
| **Deployment** | Render / Railway (optional) |

---

##  Project Structure

realtime-chat/
├── public/
│ └── index.html # Frontend chat UI
├── server.js # Backend server (Express + Socket.io)
├── package.json
└── README.md

yaml
Copy code

---

## ⚙️ Installation and Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/realtime-chat.git
cd realtime-chat
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Run the Server
bash
Copy code
node server.js
4️⃣ Open in Browser
Visit:
 http://localhost:3000

Then open two or more tabs to test real-time communication.

 How It Works
The Express server serves the index.html file to users.

Socket.io establishes a WebSocket connection between the client and the server.

When a user sends a message:

It’s emitted to the server via socket.emit().

The server broadcasts it to all connected users via io.emit().

All connected clients update their message boxes instantly — without reloading.

 Optional: Message Persistence
By default, messages disappear on refresh.
To make them persist temporarily, the server uses an in-memory array to store chat history and sends it back when a new user connects.

 Authentication (Optional Extension)
For future improvement, user authentication (e.g., JWT) can be added to:

Identify users uniquely

Secure messages or rooms

Support private messaging

 Deployment (Render)
Steps:
Create a new Web Service on Render.com

Connect your GitHub repository.

In Render setup:

Build Command: npm install

Start Command: node server.js

Deploy and wait for your live URL.

 Internship Task Mapping (Codveda Technologies)
Requirement	Implementation
Set up WebSockets with Express and a frontend	Express + Socket.io + HTML frontend
Handle bidirectional real-time communication	Messages sent and received instantly
Implement user-specific notifications/messages	Each user has a name label
Optimize real-time data updates	Socket.io efficiently manages updates
Deployment-ready	Works locally or on Render

All objectives achieved successfully

 Author
Name: Sam Mbogo
Internship Program: Codveda Technologies
Email: support@codveda.com
Date: October 2025

Conclusion
This project demonstrates mastery of real-time web technologies using Socket.io and Express.
It fulfills the Codveda Task 2 requirements by showcasing real-time communication, efficient data handling, and scalable WebSocket architecture.

