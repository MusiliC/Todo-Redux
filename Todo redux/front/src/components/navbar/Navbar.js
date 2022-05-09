import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-info">
        <div className="nav-title">
          <p>To Do List App REDUX</p>
        </div>
        <div className="nav-links">
          <Link to="/">My Todos</Link>
          <Link to="/create">Create Todo</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar