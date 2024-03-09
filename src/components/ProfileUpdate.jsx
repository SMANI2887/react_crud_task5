import React, { useContext, useEffect } from 'react';
import { userContext } from '../App';
import axios from 'axios';

function ProfileUpdate() {
const {user, setUser, options2, selectedId2, editedName2, setSelectedId2, setEditedName2, setEditedMark2, editedMark2} = useContext(userContext);
const fetchNote = async () => {
    try {
      if (options2 != "ID") {
        const response = await axios.get(
          `https://65bc9d7fb51f9b29e931de1d.mockapi.io/users/${options2}`
        );
       
        if (response.data) {
          setSelectedId2(response.data);
          setEditedName2(response.data.p_id);
          setEditedMark2(response.data.pro_roll);
        }
      }
    } catch (error) {
      console.error("Error fetching the note:", error);
    }
  };

  useEffect(() => {
    fetchNote();
  }, [options2]);

  const updateNote = (event) => {
    event.preventDefault();

    console.log("updating the note...");

    // prepare the object to update
    let student = {
      id: selectedId2.id,
      p_id: editedName2,
      pro_roll: editedMark2,
    };

    axios
      .put(
        `https://65bc9d7fb51f9b29e931de1d.mockapi.io/users/${selectedId2.id}`,
        student
      )
      .then((response) => {
        
        console.log("Note updated successfully");

        // update the state
        let updatedNotes = user.filter((n) => n.id !== student.id);
        updatedNotes.concat(student);
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
        {!selectedId2 ? (
          <p>Loading Data...</p>
        ) : (
         <>
            <label>
              Profile ID: &nbsp;&nbsp;
              <input
                value={editedName2}
                onChange={(e) => setEditedName2(e.target.value)}
              />
            </label>
            <br />
            <br />
            <label>
              Profile_Roll: &nbsp;&nbsp;
              <input
                value={editedMark2}
                onChange={(e) => setEditedMark2(e.target.value)}
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
    

export default ProfileUpdate