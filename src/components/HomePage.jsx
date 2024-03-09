import React, { Children } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Dashboard from "./Dashboard";

function HomePage({ children }) {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
