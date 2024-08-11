import React from "react";

import { Link } from "react-router-dom";
import "./Menu.css";
export const Menu = (isAdminLoggedIn) => {
  return (
    <div className="menu">
      <ol className="menu-list">
        <li className="menu-item">
          <button className="button-style">
            <Link to="/home">Home</Link>
          </button>
        </li>
        <li className="menu-item">
          <button className="button-style">
            <Link to="/registration">Admin Registration</Link>
          </button>
        </li>
        <li className="menu-item">
          <button className="button-style">
            <Link to="/login"> Admin Login</Link>
          </button>
        </li>
        {isAdminLoggedIn && (
          <li className="menu-item">
            <button className="button-style">
              <Link to="/student-registration">Student Registration</Link>
            </button>
          </li>
        )}
        <li className="menu-item">
          <button className="button-style">
            <Link to="/home"> Log Out</Link>
          </button>
        </li>
      </ol>
    </div>
  );
};
