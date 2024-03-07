import React from 'react';
import "./error404.css"
import { Link } from "react-router-dom"; 

const Error = ({ imageUrl, onButtonClick }) => {
  return (
    <div className="unique-image-with-button">
      <img src="images\error404l.jpg" alt="Preview" className="unique-image" />
     <Link to="/Home"> 
     <button onClick={onButtonClick} className="unique-button">
      رجع لرئسية
      </button>
      </Link>
    </div>
  );
};

export default Error;
