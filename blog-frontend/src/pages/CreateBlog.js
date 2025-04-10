import React, { useState } from 'react';
import axios from 'axios';

export default function CreateBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      await axios.post('http://localhost:8000/api/blogs/', {
        title,
        content
      }, {
        headers: {
          Authorization: `Token ${token}`
        }
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
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={e => setContent(e.target.value)}
        required
      />
      <button type="submit">Create</button>
    </form>
  );
}
