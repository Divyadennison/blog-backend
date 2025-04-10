import React, { useState } from 'react';
import axios from 'axios';


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // ✅ Step 1: Login and get token
      const res = await axios.post('http://localhost:8000/auth/token/login/', {
        username,
        password
      });

      const token = res.data.auth_token;
      localStorage.setItem('token', token);

      // ✅ Step 2: Fetch current user info
      const userRes = await axios.get('http://localhost:8000/auth/users/me/', {
        headers: {
          Authorization: `Token ${token}`
        }
      });

      localStorage.setItem('username', userRes.data.username);

      // ✅ Step 3: Reload to update navbar + visibility
      alert("Logged in successfully!");
      window.location.reload(); // forces Navbar & Edit buttons to re-render
    } catch (err) {
      console.error('Login failed:', err.response?.data || err.message);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}
