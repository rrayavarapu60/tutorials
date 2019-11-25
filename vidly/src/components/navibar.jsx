import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

const Navibar = () => {
  return (
    <ul className="nav justify-content-left">
      <li className="nav-item">
        <NavLink className="nav-link active" to="/movies">
          Movies
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/customer">
          Customers
        </NavLink>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/rental">
          Rentals
        </Link>
      </li>
    </ul>
  );
};

export default Navibar;
