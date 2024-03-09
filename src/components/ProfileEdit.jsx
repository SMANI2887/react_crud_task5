import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { userContext } from "../App";
import ProfileUpdate from "./ProfileUpdate";

function ProfileEdit() {
  const {
    user,
    edituser,
    setSelectedId2,
    setEditedName2,
    selectedId2,
    editedName2,
    editedMark2,
    setEditedMark2,
    options2,
    setOptions2,
  } = useContext(userContext);

  const handleFunc2 = (e) => {
    setOptions2(e.target.value);
  };

  return (
    <div>
      <Link to="/edit-profile/:id" navigate="/">
        <div className="center">
          <h2>PROFILE EDIT From &nbsp;&nbsp;&nbsp;</h2>
          <br></br>
          <label>
            Select Profile ID :&nbsp;&nbsp;&nbsp;
            <select onChange={handleFunc2} value={options2}>
              <option disabled>{"ID"}</option>
              {user.map((users) => (
                <option key={users.id}> {users.id}</option>
              ))}
            </select>
          </label>
          <br />

          <hr />
          <div>
            <br />

            {options2 !== "ID" && <ProfileUpdate />}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProfileEdit;
