import React, { useReducer } from "react";
import {
  Avatar,
  Dialog,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { UserProps } from "./User.types";
import UserDetails from "components/UserDetails";
import { useTranslation } from "react-i18next";

const User: React.FC<UserProps> = ({ user }) => {
  const { picture, name, phone, nat } = user;
  const { title, first, last } = name;
  const [open, toggle] = useReducer((prev) => !prev, false);
  const { t } = useTranslation();

  return (
    <>
      <ListItem onClick={toggle} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="User Avatar" src={picture.thumbnail} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography>
              {title} {first} {last} {nat}
            </Typography>
          }
          secondary={phone}
        />
      </ListItem>
      <Dialog open={open} onClose={toggle}>
        <UserDetails {...user} t={t} />
      </Dialog>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default User;
