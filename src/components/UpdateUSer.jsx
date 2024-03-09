import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../App";
import axios from "axios";

function UpdateUSer() {
  const {
    edituser,
    user,
    selectedId,
    setEditedName,
    setSelectedId,
    setEditedEmail,
    editedName,
    editedEmail,
    setUser,
  } = useContext(userContext);

  const fetchNote = async () => {
    try {
      if (edituser != "ID") {
        const response = await axios.get(
          `https://65bc9d7fb51f9b29e931de1d.mockapi.io/users/${edituser}`
        );
        // console.log(response.data);
        if (response.data) {
          setSelectedId(response.data);
          setEditedName(response.data.userName);
          setEditedEmail(response.data.userEmail);
        }
      }
    } catch (error) {
      console.error("Error fetching the note:", error);
    }
  };

  useEffect(() => {
    fetchNote();
  }, [edituser]);

  const updateNote = (e) => {
    e.preventDefault();
    console.log("button click");
    console.log("updating the note...");

    // prepare the object to update
    let member = {
      id: selectedId.id,
      userName: editedName,
      userEmail: editedEmail,
    };

    axios
      .put(
        `https://65bc9d7fb51f9b29e931de1d.mockapi.io/users/${selectedId.id}`,
        member
      )
      .then((response) => {
        console.log("Note updated successfully");

        // update the state
        let updatedNotes = user.filter((n) => n.id !== member.id);
        updatedNotes.concat(member);
        setUser(updatedNotes);
        location.reload();
      })
      .catch((error) => {
        console.log("Error updating note:", error);
      });
  };

  return (
    <>
      <div>
        {!selectedId ? (
          <p>Loading Data...</p>
        ) : (
          <>
            <label>
              Name: &nbsp;&nbsp;
              <input
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
            </label>
            <br />
            <br />
            <label>
              Email: &nbsp;&nbsp;
              <input
                value={editedEmail}
                onChange={(e) => setEditedEmail(e.target.value)}
              />
            </label>

            <br />
            <br />
            <button onClick={updateNote}>Update Note</button>
          </>
        )}
      </div>
    </>
  );
}

export default UpdateUSer;
