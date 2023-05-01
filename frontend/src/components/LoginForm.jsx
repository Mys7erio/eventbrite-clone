import React, { useState } from "react";
import "./LoginForm.css"; // import CSS file

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting username: ${username} and password: ${password}`);
    // Send data to server or handle login logic here
  };

  return (
    <div className="container">
        <div className="form-container">
        <form onSubmit={handleSubmit} className="centered-form">
        <label>
          <strong>Username</strong>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          <strong>Password</strong>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit" className="blue-button">
          Login
        </button>
      </form>
        </div>
    </div>
  );
}

export default LoginForm;
