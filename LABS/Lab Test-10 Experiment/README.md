# 💬 Lab Test-10 Experiment — Real-time Chat with Socket.IO

> **Navigation:** [🏠 Main README](../../README.md) · [🧪 LABS README](../README.md) · [🌐 Website View](https://iambolt7.github.io/Backend.Develepment.18722/#doc=LABS/Lab%20Test-10%20Experiment/README.md) · [💻 GitHub Repo](https://github.com/IamBolt7/Backend.Develepment.18722)

## Summary
A fully functional **real-time group chat application** using `socket.io` and Express. Demonstrates WebSocket-based bidirectional communication, user sessions, online user list, system notifications (join/leave), and a styled dark-themed chat UI.

## Concepts Covered
| Concept | Implementation |
|---|---|
| WebSocket via Socket.IO | `io.on('connection', ...)` |
| Broadcast to all clients | `io.emit('message', payload)` |
| Broadcast except sender | `socket.broadcast.emit(...)` |
| Room-less group chat | All sockets share one namespace |
| Online user tracking | `users` object keyed by `socket.id` |
| Disconnect cleanup | `socket.on('disconnect', ...)` |

## Files
```
Lab Test-10 Experiment/
├── server.js           ← Socket.IO + Express server
├── package.json
├── .gitignore
└── public/
    └── index.html      ← Full chat UI (HTML + CSS + Socket.IO client)
```

## How to Run
```bash
cd "Lab Test-10 Experiment"
npm install
npm run dev
```
Open **http://localhost:3015** in **two or more browser tabs** to see real-time messaging!

## How Socket.IO Works
```
Client A                Server               Client B
   |──── join("Satyam") ──►|                     |
   |                       |──── system msg ─────►|
   |──── message("Hello") ─►|                     |
   |                       |──── message ─────────►|
   |◄──────────────────────|──── message           |
```


## ✨ Features
- Real-time bidirectional messaging
- Join/leave system notifications
- Live online-user list
- Username normalization and message length limits
- Responsive browser chat interface

## 🎯 Learning Outcomes
- Create an HTTP server shared with Socket.IO
- Handle socket connection and disconnect events
- Broadcast events to all clients or everyone except the sender
- Track connected users by `socket.id`
- Build a real-time UI without page refreshes

## 👨‍💻 Author
**Arnav Daftuar**  
Backend Development — Lab Test-10

---

## 🔗 Connected Navigation

- [🏠 Back to Main Repository README](../../README.md)
- [🧪 Back to LABS README](../README.md)
- [🌐 Open Website Portal](../../index.html)
