import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
   
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="#">Welcome!</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link class="nav-link" to="/">Movies <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/customers">Customers</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/rentals">Rentals</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/login">Login</Link>
      </li>
    </ul>
  </div>
</nav>

        );
    }
}
 
export default Navbar;