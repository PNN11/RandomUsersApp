import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  DialogContent,
  Typography,
} from "@mui/material";
import { UserDetailsProps } from "./UserDetails.types";

const UsersDetails: React.FC<UserDetailsProps> = ({
  picture,
  name,
  phone,
  email,
  location,
}) => {
  return (
    <DialogContent sx={{ padding: 0, width: 300 }}>
      <Card>
        <CardMedia component="img" src={picture.large} />
        <CardContent>
          <Typography variant="h4" marginBottom={2}>
            {name.title} {name.first} {name.last}
          </Typography>
          <Typography>Phone: {phone}</Typography>
          <Typography>Email: {email}</Typography>
          <Typography>
            Location: {location.state} {location.city} {location.street.name}{" "}
            {location.street.number} {location.postcode}
          </Typography>
        </CardContent>
      </Card>
    </DialogContent>
  );
};

export default UsersDetails;
