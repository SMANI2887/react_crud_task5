import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <li className="nav-item active cursor  point">
          <Link
            className="nav-link"
            onClick={(event) => {
              event.preventDefault();
              navigate("/");
            }}
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="nav-item active cursor">
          <Link
            className="nav-link"
            onClick={(event) => {
              event.preventDefault();
              navigate("/users ");
            }}
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>List Read</span>
          </Link>
        </li>
        <li className="nav-item active cursor">
          <Link
            className="nav-link"
            onClick={(event) => {
              event.preventDefault();
              navigate("/create-user");
            }}
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Create User</span>
          </Link>
        </li>

        <li className="nav-item active cursor">
          <Link
            className="nav-link"
            onClick={(event) => {
              event.preventDefault();
              navigate("/edit-user/:id");
            }}
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Edit User</span>
          </Link>
        </li>
        <li className="nav-item active cursor">
          <Link
            className="nav-link"
            onClick={(event) => {
              event.preventDefault();
              navigate("/profile/:id");
            }}
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Profile</span>
          </Link>
        </li>
        <li className="nav-item active cursor">
          <Link
            className="nav-link"
            onClick={(event) => {
              event.preventDefault();
              navigate("/edit-profile/:id");
            }}
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Profile Edit</span>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Sidebar;
