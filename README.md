Training and Placement Cell Management System

A web-based application designed to manage college placement activities and help students explore job opportunities.

🌐 Live Website

https://omghawate06-alt.github.io/Training-Placement-System/

📌 About the Project

The Training and Placement Cell Management System is a full-stack web development project.

It provides a platform where students can register, log in, explore companies, view placement drives and submit application details.

The admin dashboard provides placement-related information and sample statistics.

✨ Features

* Student Registration
* Student Login
* Student Dashboard
* Student Profile
* Company Management
* Search Companies
* Placement Drive Listing
* Search Placement Drives
* Student Application Form
* Resume PDF Selection
* Admin Dashboard
* Placement Statistics Chart
* Placement Reports

🛠️ Technologies Used

Technology	Purpose
HTML	Structure
CSS	Design
JavaScript	Functionality
Node.js	Backend
Express.js	API Development
MongoDB	Database
Mongoose	Database Connectivity
GitHub	Version Control
GitHub Pages	Frontend Hosting
Render	Backend Hosting

📂 Project Structure

training-placement-system/
│
├── index.html
├── login.html
├── register.html
├── admin.html
├── student.html
├── companies.html
├── drives.html
├── applications.html
├── reports.html
├── style.css
├── script.js
├── server.js
├── package.json
│
├── models/
│   └── Student.js
│
└── routes/
    └── auth.js

🔗 Backend API

Backend URL:

https://training-placement-system.onrender.com

Health Check:

https://training-placement-system.onrender.com/api/health

Authentication APIs

* POST /api/auth/register
* POST /api/auth/login

⚙️ How to Run Locally

1. Install Node.js.
2. Clone this repository.
3. Open the project folder in VS Code.
4. Install dependencies:

npm install

5. Create a .env file:

MONGODB_URI=your_mongodb_connection_string

6. Start the backend:

npm start

7. Open the frontend using a local web server.

📚 Learning Outcomes

* Learned HTML, CSS and JavaScript.
* Practised frontend development.
* Built backend APIs using Node.js and Express.
* Connected MongoDB with the backend.
* Implemented registration and login.
* Deployed frontend and backend.
* Used GitHub for project management.

⚠️ Current Limitations

* Company and placement statistics use sample data.
* Student profile currently displays demo information.
* Application submissions are not saved in the database.
* Resume selection is available, but server upload is not implemented.
* Admin authentication and role-based access are not implemented.

👨‍💻 Developer

Developed as a student project to learn Full-Stack Web Development.

GitHub: https://github.com/omghawate06-alt

⸻

⭐ Thank you for visiting my project!
