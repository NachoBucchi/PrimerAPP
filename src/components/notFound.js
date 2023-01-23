import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <h1>Oops! You seem to be lost.</h1>
    <p>Return to Home:</p>
    <Link to="/">Home</Link>
    <br/>
  </div>
);

export default NotFound;
