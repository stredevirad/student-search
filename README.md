# Student Information System

A simple full-stack Student Information System built to demonstrate how a frontend communicates with a backend to retrieve and display stored student information.

## Features

- Search students using their UID
- Display:
  - Student Name
  - UID
  - Roll Number
  - Branch
- Shows "Student Not Found" when the UID does not exist
- Backend stores student data in a JSON file
- Frontend and backend are separated into their own folders

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript
- Vite

### Backend
- Node.js
- Express.js
- CORS

### Data Storage
- JSON (`students.json`)

## Project Structure

```text
student-search/
│
├── backend/
│   ├── package.json
│   ├── server.js
│   └── students.json
│
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── src/
│       ├── main.js
│       └── style.css
│
├── package.json
└── .gitignore****
