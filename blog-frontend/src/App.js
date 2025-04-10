// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

import Signup from './pages/Signup';
import Login from './pages/Login';
import CreateBlog from './pages/CreateBlog';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import EditBlog from './pages/EditBlog';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/blogs/:id/edit" element={<EditBlog />} /> {/* ✅ Correct edit route */}
      </Routes>
    </Router>
  );
}

export default App;
