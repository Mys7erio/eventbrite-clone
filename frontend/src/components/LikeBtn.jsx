import "./LikeBtn.css";
import heart from "../assets/heart.png";
import heartRed from "../assets/heart-red.png";

import { useState } from "react";

export default function LikeBtn() {
  // Use useState to store the state of the variable
  const [liked, setLiked] = useState(false);

  // Create function to be executed when the like button is clicked
  const updateState = () => {
    setLiked(!liked);
  };

  return (
    <button className="btn-container" onClick={updateState}>
      {/* Conditionally render icons depending on the state of the `liked` variable */}
      {liked ? (
        <img src={heart}  alt="Like" />
      ) : (
        <img src={heartRed}  alt="Unlike" />
      )}
    </button>
  );
}
