import React from "react";
import UsersFilter from "containers/UsersFilter";
import UsersList from "containers/UsersList";
import { Container, Divider, Paper } from "@mui/material";
import Header from "components/Header";
import { useTheme } from "providers/ThemeProvider/ThemeProvider";
import { useTranslation } from "react-i18next";

const UsersAppContainer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <Paper elevation={0}>
      <Header toggleTheme={toggleTheme} theme={theme} t={t} i18n={i18n} />
      <Container>
        <UsersFilter />
        <Divider />
        <UsersList />
      </Container>
    </Paper>
  );
};

export default UsersAppContainer;
