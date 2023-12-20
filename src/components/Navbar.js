import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <nav className="bg-primary navbar navbar-dark ">
      <div className="container">
        <a href="#" className="navbar-brand  ">
          <i className={props.icon}></i> {props.title}
        </a>
      </div>
    </nav>
  );
};
Navbar.defaultProps = {
  icon: "bi bi-github",
  title: "Github Finder",
};
Navbar.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Navbar;
