# TEAM BRAIN BUDS – Student Team Members Management Application

## 📖 Project Description  
A full-stack “Student Team Members Management” app that lets you:
- **Add** new team members via a form (including image upload)  
- **View** a list of all members in a responsive grid  
- **Inspect** individual member details on a dedicated page  

Built with React (frontend) and Node.js + Express + MongoDB (backend).

---

## 🛠️ Tech Stack  
- **Frontend:** React, React Router v6, Axios  
- **Styling:** Plain CSS (with a pastel theme)  
- **Backend:** Node.js, Express.js, Mongoose (MongoDB ODM), Multer (file uploads)  
- **Database:** MongoDB (local or Atlas) 

## ⚙️ Installation  

### Prerequisites  
- Node.js (v14+ recommended)  
- npm (comes with Node.js)  
- MongoDB (running locally or a MongoDB Atlas URI)

### 1. Clone the repo  
```bash
git clone https://github.com/<arya2315>/team-brain-buds.git
cd team-brain-buds

2. Backend setup
 cd backend
 npm install

 Copy .env.example → .env and fill in your MongoDB URI
   MONGODB_URI=<your_mongo_connection_string>
   PORT=5000

 Start the server : 
    node server.js 

3. Frontend Setup 
  cd ../frontend
 npm install

 In frontend/package.json, ensure you have the proxy:
 "proxy": "http://localhost:5000",

Start the React dev server:
npm start
The UI will open at http://localhost:3000/


4. ▶️ Running the App

Backend
  cd backend
  node server.js

Frontend
   cd frontend
   npm start

In your browser, navigate to http://localhost:3000 to use the app.


