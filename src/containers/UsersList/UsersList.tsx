import React, { useState, useEffect } from "react";
import { CircularProgress, List } from "@mui/material";

import { UsersListProps } from "./UsersList.types";
import { User } from "api/users.types";
import { getUsers } from "api/users";
import UserItem from "components/UserItem";

const UsersList: React.FC<UsersListProps> = ({ filterValues }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setLoading(true);

    getUsers(filterValues)
      .then((users) => setUsers(users))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [filterValues]);

  return (
    <List sx={{ textAlign: "center" }}>
      {loading && <CircularProgress size={70} />}
      {error && "Error..."}
      {!error &&
        !loading &&
        users &&
        users.map((user) => <UserItem key={user.login.uuid} user={user} />)}
    </List>
  );
};

export default UsersList;
