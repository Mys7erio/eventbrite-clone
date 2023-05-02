import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./LoginForm.css"; // import CSS file

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`Submitting username: ${username} and password: ${password}`);
    const response = await fetch("http://localhost:8000/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const data = await response.json();
    console.log(response.status);
    console.log(data);

    console.log(response.status === 302);
    if (response.status === 302) {
      setLoggedIn(true);
    }
  };

  if (loggedIn) {
    return <Navigate to="/home/" />;
  }

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="centered-form">
          <label>
            <strong>Username</strong>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
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
