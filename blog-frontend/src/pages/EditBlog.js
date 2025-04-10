import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function EditBlog() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get(`https://blog-backend-w55n.onrender.com/api/blogs/${id}/`)
      .then(res => {
        setTitle(res.data.title);
        setContent(res.data.content);
      })
      .catch(err => alert("Failed to load blog"));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://blog-backend-w55n.onrender.com/api/blogs/${id}/`, {
        title, content
      }, {
        headers: { Authorization: `Token ${token}` }
      });
      alert("Blog updated!");
    } catch (err) {
      alert("Update failed");
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <h2>Edit Blog</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} required />
      <textarea value={content} onChange={e => setContent(e.target.value)} required />
      <button type="submit">Update</button>
    </form>
  );
}
