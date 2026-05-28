// NotFoundCard.jsx

import React from "react";
import { HiOutlineHome } from "react-icons/hi2";
import { FiFileText } from "react-icons/fi";
import "./styles/pageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="notfound-card-container">
    <div className="notfound-card">
      <div className="icon-box">
        <FiFileText className="file-icon" />
      </div>

      <h1 className="error-code">404</h1>

      <h2 className="title">Page Not Found</h2>

      <p className="description">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

     

      <a href="/" className="home-btn">
        <HiOutlineHome />
        Back to Home
      </a>
    </div>
    </div>
  );
};

export default PageNotFound;
