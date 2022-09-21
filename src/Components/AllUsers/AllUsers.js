import React, { useEffect, useState } from "react";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      {users.map((user) => showUsers(user))}
      <p>Total User Count: {users.length}</p>
    </div>
  );
};

const showUsers = (props) => {
  return (
    <div>
      <h2>Username: {props.name}</h2>
      <h3>Email: {props.email}</h3>
    </div>
  );
};

export default AllUsers;
