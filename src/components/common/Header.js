import React from 'react';
import {Router, Link} from 'react-router';

const Header = () => {

  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <Link to="app" className="navbar-brand">
          <img src="images/pluralsight-logo.png"/>
        </Link>
        <ul className="nav navbar-nav">
          <li><Link to="home">Home</Link></li>
          <li><Link to="courses">Courses</Link></li>
          <li><Link to="about">About</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
