import Card from "./components/Card";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { checkAuthentication } from "./components/util";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Use useEffect to make sure the function is called only once
  checkAuthentication().then((result) => {
    result ? setIsAuthenticated(true) : setIsAuthenticated(false);
  });
  
  if (!isAuthenticated) {
    console.log("Authenticated? " + isAuthenticated);
    return <Navigate to="/login/" />;
  }

  return (
    <div className="container">
      <Card
        title="Startup Party - First time in Bengaluru"
        date="Sun, May 7th, 9:00 AM"
        venue="Hilton Bengaluru Embassy Manyata Tech Park"
        image="https://picsum.photos/384/256"
      />

      <Card
        title="Startup Party - First time in Bengaluru"
        date="Sun, May 7th, 9:00 AM"
        venue="Hilton Bengaluru Embassy Manyata Tech Park"
        image="https://picsum.photos/384/256"
      />

      <Card
        title="Startup Party - First time in Bengaluru"
        date="Sun, May 7th, 9:00 AM"
        venue="Hilton Bengaluru Embassy Manyata Tech Park"
        image="https://picsum.photos/384/256"
      />
    </div>
  );
}
