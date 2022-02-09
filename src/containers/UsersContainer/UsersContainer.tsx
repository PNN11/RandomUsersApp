import React from "react";
import { Container, Divider, Paper } from "@mui/material";

import Header from "components/Header";
import { useTheme } from "providers/ThemeProvider/ThemeProvider";
import UsersFilter from "containers/UsersFilter";
import UsersList from "containers/UsersList";

const UsersContainer: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Paper elevation={0}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Container>
        <UsersFilter />
        <Divider />
        <UsersList />
      </Container>
    </Paper>
  );
};

export default UsersContainer;
