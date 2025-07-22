import React, { useState } from "react";
import AdminPanel from "./AdminPanel";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleLogin = () => {
    // Set predefined username and password for testing
    const predefinedUsername = "abarna";
    const predefinedPassword = "abarna@04";

    // Check if the entered username and password match the predefined ones
    if (username === predefinedUsername && password === predefinedPassword) {
      setLoginSuccess(true);
      setShowErrorMessage(false);
    } else {
      setLoginSuccess(false);
      setShowErrorMessage(true);
    }
  };

  return (
    <div>
      {loginSuccess ? (
        <AdminPanel />
      ) : (
        <div className="login-body">
          <div className="login-container">
            <h2>Admin Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showErrorMessage && (
              <p className="error-message">Incorrect username or password</p>
            )}
            <button className="float-right" onClick={handleLogin}>Login</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLogin;
