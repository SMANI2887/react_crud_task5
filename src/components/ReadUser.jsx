import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../App";

function ReadUser() {
  const { user } = useContext(userContext);
  // console.log(user);
  return (
    <div>
      <Link to="/users" navigate="/">
        <h2>USER READ TABLE</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {user.map((u, index) => {
              return (
                <tr key={index}>
                  <td>{u.id}</td>
                  <td>{u.userName}</td>
                  <td>{u.userEmail}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Link>
    </div>
  );
}

export default ReadUser;
