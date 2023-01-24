import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Navbar() {
  return (
    <div>
      <header>
        <h1 className="logo">Logo</h1>
        <nav>
          <ul>
            <li>
              <Link to="/home"></Link>Home
            </li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
      </header>

      <div class="content">
        <h2>Your content would go here</h2>
      </div>
    </div>
  );
}
