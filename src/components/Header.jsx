import React from "react";

function Header() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          <h2 style={{ display: "flex", justifyItems: "center" }}>
            {" "}
            CRUD OPERATIONS
          </h2>
        </nav>
      </div>
    </>
  );
}

export default Header;
