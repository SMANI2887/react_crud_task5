import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../App";
import axios from "axios";

function CreateUser() {
  const { user, name, setName, email, setEmail } = useContext(userContext);

  const addUser = (e) => {
    e.preventDefault();
    console.log("button click");
    const userObj = {
      id: user.length + 1,
      userName: name,
      userEmail: email,
    };

    axios
      .post("https://65bc9d7fb51f9b29e931de1d.mockapi.io/users/", userObj)
      .then((response) => {
        console.log("note added successfully...");
        location.reload();
      });

    //clear stud record
    setName("");
    setEmail("");

    fetchNotes();
  };

  // }
  return (
    <>
      <div className="form-div">
        <div className="center">
          <h3>CREATE RECORDS</h3>
          <form onSubmit={addUser}>
            <input
              name="filter"
              type="text"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <br />
            <br />
            <input
              name="filter"
              type="text"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <br />
            <br />

            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateUser;
