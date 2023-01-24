import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Navbar() {
  return (
    <div>
      <header>
        <h1 className="logo">Logo</h1>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <label for="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
      </header>

      <div className="content">
        <h2>Your content would go here</h2>
      </div>
    </div>
  );
}
