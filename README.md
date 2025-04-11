📝 Full Stack Blog Application

A full-featured Blog App built using **Django REST Framework** for the backend and **React** for the frontend. Users can sign up, log in, and perform full CRUD operations on blog posts. Only the author of a blog can edit or delete it. The app features authentication, pagination, and is fully responsive.

---

🌐 Live Demo

- 🔗 **Frontend**: [https://blog-frontend-d1cw.onrender.com](https://blog-frontend-d1cw.onrender.com)  
- 🔗 **Backend API**: [https://blog-backend-z9hh.onrender.com/api](https://blog-backend-z9hh.onrender.com/api)

---

🚀 Features

- ✅ User signup and login (token-based authentication)
- ✅ Blog CRUD (Create, Read, Update, Delete) — only the author can edit/delete
- ✅ Public blog listing with pagination
- ✅ Blog detail view
- ✅ Fully responsive design
- ✅ Deployed frontend and backend (Render)

---

⚙️ Tech Stack

- **Frontend**: React, Axios, React Router DOM
- **Backend**: Django, Django REST Framework, Djoser
- **Deployment**: Render (for both frontend and backend)

---

🛠 How to Run Locally

 📦 Backend Setup (Django)

```bash
# Clone the backend repo
git clone https://github.com/Divyadennison/blog-backend.git
cd blog-backend

# Create and activate virtual environment
python -m venv env
source env/bin/activate     # For Windows: env\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the development server
python manage.py runserver
Backend will be running at: http://localhost:8000/api

💻 Frontend Setup (React)
bash
Copy
Edit
 Clone the frontend repo
git clone https://github.com/Divyadennison/blog-frontend.git
cd blog-frontend

  Install dependencies
npm install

  Start the frontend server
npm start
Frontend will be running at: http://localhost:3000
Make sure your React app’s API calls point to http://localhost:8000 during development.
