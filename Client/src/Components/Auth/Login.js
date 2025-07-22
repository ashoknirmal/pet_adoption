import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css'; // Optional: Separate CSS for shared styles

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here, such as verifying with a backend API
    if (email === 'test@example.com' && password === 'password') {
      navigate('/'); // Redirect to home on successful login
    } else {
      alert('Invalid login credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
          </div>
          <div className="input-group">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
          </div>
          <div className="options">
            <label><input type="checkbox" name="remember" /> Remember me</label>
            <a href="#" className="forgot-password">Forgot password</a>
          </div>
          <button type="submit">LOGIN</button>
          <p>Don't have an account? <a href="/signup">REGISTER</a></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
