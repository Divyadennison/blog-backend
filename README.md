# 📝 Full Stack Blog Application

A blog app built with React and Django REST Framework.

## 🚀 Features

- User signup and login (token auth)
- Create, edit, delete blogs (only if logged in and author)
- Public blog listing with pagination
- Blog detail view
- Responsive UI

## 💻 Tech Stack

- Frontend: React, Axios, React Router DOM
- Backend: Django, Django REST Framework, Djoser
- Deployment: Render

## 🌐 Live URLs

- Frontend: https://blog-frontend-d1cw.onrender.com  
- Backend: https://blog-backend-z9hh.onrender.com/api

## 🛠️ How to Run Locally

### Backend
```bash
git clone https://github.com/Divyadennison/blog-backend
cd blog-backend
python -m venv env
source env/bin/activate  # for Windows use env\Scripts\activate
pip install -r requirements.txt
python manage.py runserver
