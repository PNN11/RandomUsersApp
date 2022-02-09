import React, { useState } from "react";
import { Container, Divider, Paper } from "@mui/material";

import UsersFilter from "containers/UsersFilter";
import UsersList from "containers/UsersList";
import Header from "components/Header";
import { useTheme } from "providers/ThemeProvider/ThemeProvider";

const UsersContainer: React.FC = () => {
  const [filterValues, setFilterValues] = useState({
    gender: "male",
    page: 1,
    resultsCount: 10,
    nat: "",
  });

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
      <Header toggleTheme={toggleTheme} theme={theme} />
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

export default UsersContainer;
