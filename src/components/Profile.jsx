import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../App";

function Profile() {
  const { user } = useContext(userContext);
  return (
    <div>
      <Link to="/profile/:id" navigate="/">
        <h2>PROFILE READ TABLE</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Profile_No</th>
              <th>Profile_roll</th>
            </tr>
          </thead>
          <tbody>
            {user.map((u, index) => {
              return (
                <tr key={index}>
                  <td>{u.p_id}</td>
                  <td>{u.pro_roll}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Link>
    </div>
  );
}

export default Profile;
