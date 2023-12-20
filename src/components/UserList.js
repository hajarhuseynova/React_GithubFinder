import User from "./User";
import Loading from "./Loading";
import React, { useContext } from "react";
import { UsersContext } from "../contexts/UsersContext";

const UserList = () => {
  const { users, loading } = useContext(UsersContext);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container mt-3">
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
