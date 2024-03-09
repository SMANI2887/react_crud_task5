import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../App";
import UpdateUSer from "./UpdateUSer";

function EditUser() {
  const { edituser, user, setEdituser } = useContext(userContext);
  const editHandle = (e) => {
    e.preventDefault();
    setEdituser(e.target.value);
  };

  return (
    <div>
      <Link to="/edit-user/:id" navigate="/">
        <div className="center">
          <h2>EDIT From &nbsp;&nbsp;&nbsp;</h2>
          <br />
          <div>
            <label>
              Select User ID :&nbsp;&nbsp;&nbsp;
              <select onChange={editHandle} value={edituser}>
                <option disabled>{"ID"}</option>
                {user.map((users) => (
                  <option key={users.id}> {users.id}</option>
                ))}
              </select>
            </label>
          </div>
          <br />

          <hr />
          <div>
            <br />

            {edituser !== "ID" && <UpdateUSer />}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default EditUser;
