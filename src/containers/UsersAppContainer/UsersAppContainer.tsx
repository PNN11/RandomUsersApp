import React, { useState } from "react";
import UsersFilter from "containers/UsersFilter";
import UsersList from "containers/UsersList";
import { Container, Divider, Paper } from "@mui/material";
import Header from "components/Header";
import { useTheme } from "providers/ThemeProvider/ThemeProvider";
import { useTranslation } from "react-i18next";

const UsersAppContainer: React.FC = () => {
  const [filterValues, setFilterValues] = useState({
    gender: "male",
    page: 1,
    resultsCount: 10,
    nat: "",
  });

  const { t, i18n } = useTranslation();

  const { theme, toggleTheme } = useTheme();

  const handleChangeGender = (gender: string) => {
    setFilterValues({ ...filterValues, gender });
  };

  const handleChangePage = (page: number) => {
    setFilterValues({ ...filterValues, page });
  };

  const handleChangeResultsCount = (resultsCount: number) => {
    setFilterValues({ ...filterValues, resultsCount });
  };

  const handleChangeNat = (nat: string) => {
    setFilterValues({ ...filterValues, nat });
  };

  return (
    <Paper elevation={0}>
      <Header toggleTheme={toggleTheme} theme={theme} t={t} i18n={i18n} />
      <Container>
        <UsersFilter
          filterValues={filterValues}
          onChangeGender={handleChangeGender}
          onChangePage={handleChangePage}
          onChangeResultsCount={handleChangeResultsCount}
          onChangeNat={handleChangeNat}
        />
        <Divider />
        <UsersList filterValues={filterValues} />
      </Container>
    </Paper>
  );
};

export default UsersAppContainer;
