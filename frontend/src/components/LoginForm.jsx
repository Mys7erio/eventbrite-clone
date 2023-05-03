import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./LoginForm.css"; // import CSS file

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`Submitting username: ${username} and password: ${password}`);
    const response = await fetch("http://localhost:8000/api-token-auth/", {
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

    // Login failed
    if (!data.token){
      setMessage("Login Failed"); 
    }
    else {
      // Login successful
      setLoggedIn(true);
      localStorage.setItem("Token", data.token)
      console.log(localStorage.getItem("Token"))
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

          <p className="message">{message}</p>

          <button type="submit" className="blue-button">
            Login
          </button>

        </form>
      </div>
    </div>
  );
}

export default LoginForm;
