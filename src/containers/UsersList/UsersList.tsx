import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, List } from "@mui/material";

import UserItem from "components/UserItem";
import { getSlice, getUsers } from "store/users";
import { Statuses } from "store/types";
import { UsersListProps } from "./UsersList.types";

const UsersList: React.FC<UsersListProps> = () => {
  const { users, usersRequestStatus, gender, page, resultsCount, nat } =
    useSelector(getSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers({ gender, page, resultsCount, nat }));
  }, [gender, page, resultsCount, nat, dispatch]);

  const loading = usersRequestStatus === Statuses.PENDING;

  const error = usersRequestStatus === Statuses.FAILURE;

  return (
    <List sx={{ textAlign: "center" }}>
      {loading && <CircularProgress size={70} />}
      {error && "Error..."}
      {!loading &&
        !error &&
        users &&
        users.map((user) => <UserItem key={user.login.uuid} user={user} />)}
    </List>
  );
};

export default UsersList;
