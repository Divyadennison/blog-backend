import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [count, setCount] = useState(0); // total blogs
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5); // match your backend PAGE_SIZE
  const loggedInUsername = localStorage.getItem('username');

  const fetchBlogs = async (page = 1) => {
    try {
      const res = await axios.get(`http://localhost:8000/api/blogs/?page=${page}`);
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

  const handlePrev = () => {
    if (currentPage > 1) {
      fetchBlogs(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      fetchBlogs(currentPage + 1);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>All Blogs</h2>

      {blogs.map(blog => (
        <div key={blog.id} style={styles.card}>
          <Link to={`/blogs/${blog.id}`} style={styles.title}>
            {blog.title}
          </Link>
          <p style={styles.preview}>{blog.content.slice(0, 100)}...</p>

          {blog.author?.username === loggedInUsername && (
            <Link to={`/blogs/${blog.id}/edit`} style={styles.editLink}>✏️ Edit</Link>
          )}
        </div>
      ))}

      {/* ✅ Pagination with Prev/Next */}
      <div style={styles.pagination}>
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          style={{
            ...styles.pageButton,
            opacity: currentPage === 1 ? 0.5 : 1
          }}
        >
          ◀ Prev
        </button>

        {[...Array(totalPages).keys()].map(i => (
          <button
            key={i}
            onClick={() => fetchBlogs(i + 1)}
            style={{
              ...styles.pageButton,
              backgroundColor: currentPage === i + 1 ? '#007BFF' : '#eee',
              color: currentPage === i + 1 ? '#fff' : '#000'
            }}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          style={{
            ...styles.pageButton,
            opacity: currentPage === totalPages ? 0.5 : 1
          }}
        >
          Next ▶
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '2rem',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  card: {
    border: '1px solid #ddd',
    padding: '1rem',
    marginBottom: '1.5rem',
    borderRadius: '8px',
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    color: '#333',
    textDecoration: 'none',
  },
  preview: {
    color: '#555',
    margin: '0.5rem 0',
  },
  editLink: {
    fontSize: '0.9rem',
    color: '#007BFF',
    textDecoration: 'none',
  },
  pagination: {
    textAlign: 'center',
    marginTop: '2rem',
  },
  pageButton: {
    margin: '0 5px',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};
