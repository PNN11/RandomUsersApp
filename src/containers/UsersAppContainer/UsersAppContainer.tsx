import React, { useState } from "react";
import UsersFilter from "containers/UsersFilter";
import UsersList from "containers/UsersList";
import { Container, Divider } from "@mui/material";

const UsersAppContainer: React.FC = () => {
  const [filterValues, setFilterValues] = useState({
    gender: "male",
    page: 1,
    resultsCount: 10,
    nat: "",
  });

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
  );
};

export default UsersAppContainer;
