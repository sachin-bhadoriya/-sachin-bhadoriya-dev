// NotFoundCard.jsx

import React from "react";
import { HiOutlineHome } from "react-icons/hi2";
import { FiFileText } from "react-icons/fi";
import "./styles/pageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="notfound-card">
      <div className="icon-box">
        <FiFileText className="file-icon" />
      </div>

      <h1 className="error-code">404</h1>

      <h2 className="title">Page Not Found</h2>

      <p className="description">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      <div className="info-box">
        <span className="dot"></span>
        <p>
          Don’t worry, you can find plenty of other things on our homepage.
        </p>
      </div>

      <a href="/" className="home-btn">
        <HiOutlineHome />
        Back to Home
      </a>
    </div>
  );
};

export default PageNotFound;
