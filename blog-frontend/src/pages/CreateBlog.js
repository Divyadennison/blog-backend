import React, { useState } from 'react';
import axios from 'axios';

export default function CreateBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const token = localStorage.getItem('token');

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://blog-backend-w55n.onrender.com/api/blogs/', { title, content }, {
        headers: { Authorization: `Token ${token}` }
      });
      alert("Blog created!");
    } catch (err) {
      alert("Failed to create blog");
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <form onSubmit={handleCreate}>
      <h2>Create Blog</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" required />
      <button type="submit">Create</button>
    </form>
  );
}
