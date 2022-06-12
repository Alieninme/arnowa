import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get("/users/");
      setUsers(res.data);
    };
    fetchUser();
  }, []);

  return (
    <div>
      <h1>hi</h1>
      <ul>
        {users.map((user) => (
          <li key={user.email}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}
