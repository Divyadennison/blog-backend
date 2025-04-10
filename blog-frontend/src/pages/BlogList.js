import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);
  const loggedInUsername = localStorage.getItem('username');

  const fetchBlogs = async (page = 1) => {
    try {
      const res = await axios.get(`https://blog-backend-w55n.onrender.com/api/blogs/?page=${page}`);
      setBlogs(res.data.results);
      setCount(res.data.count);
      setCurrentPage(page);
    } catch (err) {
      console.error('Error fetching blogs:', err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const totalPages = Math.ceil(count / pageSize);

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem' }}>
      <h2 style={{ textAlign: 'center' }}>All Blogs</h2>
      {blogs.map(blog => (
        <div key={blog.id} style={{ border: '1px solid #ddd', padding: '1rem', marginBottom: '1rem' }}>
          <Link to={`/blogs/${blog.id}`} style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{blog.title}</Link>
          <p>{blog.content.slice(0, 100)}...</p>
          {blog.author?.username === loggedInUsername && (
            <Link to={`/blogs/${blog.id}/edit`}>✏️ Edit</Link>
          )}
        </div>
      ))}

      <div style={{ textAlign: 'center' }}>
        <button onClick={() => fetchBlogs(currentPage - 1)} disabled={currentPage === 1}>◀ Prev</button>
        {[...Array(totalPages).keys()].map(i => (
          <button key={i} onClick={() => fetchBlogs(i + 1)}>{i + 1}</button>
        ))}
        <button onClick={() => fetchBlogs(currentPage + 1)} disabled={currentPage === totalPages}>Next ▶</button>
      </div>
    </div>
  );
}
