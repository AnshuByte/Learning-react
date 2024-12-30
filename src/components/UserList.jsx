import React from "react";

const UserList = () => {
  const users = [
    { id: 1, name: "anshu", age: 23 },
    { id: 2, name: "Debanshee", age: 21 },
    { id: 3, name: "ram", age: 33 },
  ];

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <h1>Name is : {user.name}</h1>
        </div>
      ))}
    </>
  );
};

export default UserList;
