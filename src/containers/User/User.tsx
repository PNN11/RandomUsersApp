import React, { useReducer } from "react";
import {
  Avatar,
  Dialog,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { UserProps } from "./User.types";
import UserDetails from "components/UserDetails";

const User: React.FC<UserProps> = ({ user }) => {
  const { picture, name, phone, nat } = user;
  const { title, first, last } = name;
  const [open, toggle] = useReducer((prev) => !prev, false);

  return (
    <>
      <ListItem onClick={toggle} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="User Avatar" src={picture.thumbnail} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <>
              {title} {first} {last} {nat}
            </>
          }
          secondary={phone}
        />
      </ListItem>
      <Dialog open={open} onClose={toggle}>
        <UserDetails {...user} />
      </Dialog>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default User;
