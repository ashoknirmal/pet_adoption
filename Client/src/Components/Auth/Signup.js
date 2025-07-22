import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here, possibly connecting to a backend
    alert('Registration successful');
    navigate('/login');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Username" />
          </div>
          <div className="input-group">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
          </div>
          <div className="input-group">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
          </div>
          <button type="submit">Sign Up</button>
          <p>Already have an account? <a href="/login">Login here</a></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
