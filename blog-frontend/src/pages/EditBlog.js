// src/pages/EditBlog.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function EditBlog() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get(`http://localhost:8000/api/blogs/${id}/`)
      .then(res => {
        setTitle(res.data.title);
        setContent(res.data.content);
      })
      .catch(err => {
        console.error("Error loading blog:", err);
        alert("Failed to load blog. Make sure you're the author.");
      });
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/blogs/${id}/`, {
        title,
        content
      }, {
        headers: {
          Authorization: `Token ${token}`
        }
      });
      alert("Blog updated!");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Update failed. You may not be the author.");
    }
  };

  if (!title && !content) return <p>Loading...</p>; // ✅ Show while fetching

  return (
    <form onSubmit={handleUpdate}>
      <h2>Edit Blog</h2>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        required
      />
      <button type="submit">Update</button>
    </form>
  );
}
