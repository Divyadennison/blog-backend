// src/Navbar.js
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Check token on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // true if token exists
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    alert('Logged out');
    navigate('/');
    window.location.reload(); // refresh to update UI
  };

  return (
    <nav>
      <Link to="/">Home</Link> |{' '}

      {!isLoggedIn && (
        <>
          <Link to="/login">Login</Link> |{' '}
          <Link to="/signup">Signup</Link> |{' '}
        </>
      )}

      {isLoggedIn && (
        <>
          <Link to="/create">Create Blog</Link> |{' '}
          <button onClick={handleLogout} style={buttonStyle}>🚪 Logout</button>
        </>
      )}
    </nav>
  );
}

const buttonStyle = {
  background: 'none',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  fontSize: '14px'
};

export default Navbar;
