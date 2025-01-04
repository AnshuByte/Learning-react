import React from "react";

const UserStatus = ({ isAdmin, loggedIn }) => {
  if (isAdmin && loggedIn) {
    return <h1>Welcome Admin</h1>;
  }
  if (loggedIn) {
    return <h1>Welcome User</h1>;
  }
};

export default UserStatus;
