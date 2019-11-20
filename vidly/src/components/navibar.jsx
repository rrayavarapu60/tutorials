import React, { Component } from "react";
import { Link } from "react-router-dom";

const Navibar = () => {
  return (
    <ul className="nav justify-content-left">
      <li className="nav-item">
        <Link className="nav-link active" to="/movies">
          Movies
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/customers">
          Customers
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Rental">
          Rentals
        </Link>
      </li>
    </ul>
  );
};

export default Navibar;
