import React from "react";
import {
  MenuItem,
  Pagination,
  Select,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  SelectChangeEvent,
  FormControl,
  InputLabel,
} from "@mui/material";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import { useTranslation } from "react-i18next";

import { UsersFilterProps, nationals, results } from "./UsersFilter.types";

const UsersFilter: React.FC<UsersFilterProps> = ({
  filterValues,
  onChangeGender,
  onChangePage,
  onChangeResultsCount,
  onChangeNat,
}) => {
  const { t } = useTranslation();

  const handleChangeGenderValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    onChangeGender(e.currentTarget.value);
  };

  const handleChangePageValue = (
    e: React.ChangeEvent<unknown>,
    value: number
  ) => {
    onChangePage(value);
  };

  const handleChangeResultsCountValue = (e: SelectChangeEvent<number>) => {
    onChangeResultsCount(Number(e.target.value));
  };

  const handleChangeNatValue = (e: SelectChangeEvent) => {
    onChangeNat(e.target.value);
  };

  return (
    <Stack direction="row" justifyContent="space-between" p={2}>
      <div>
        <Typography>
          {t("gender")}:
          {filterValues.gender === "male" ? t("male") : t("female")}
        </Typography>
        <ToggleButtonGroup value={filterValues.gender}>
          <ToggleButton value="male" onClick={handleChangeGenderValue}>
            <MaleIcon />
          </ToggleButton>
          <ToggleButton value="female" onClick={handleChangeGenderValue}>
            <FemaleIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <Stack>
        <Typography>
          {t("page")}: {filterValues.page}
        </Typography>
        <Pagination
          count={50}
          page={filterValues.page}
          onChange={handleChangePageValue}
        />
      </Stack>
      <FormControl sx={{ width: 0.2 }}>
        <InputLabel id="results">{t("results")}</InputLabel>
        <Select
          id="results"
          label="Results"
          name="Results"
          value={filterValues.resultsCount}
          onChange={handleChangeResultsCountValue}
        >
          {results.map((res) => (
            <MenuItem key={res} value={res}>
              {res}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ width: 0.2 }}>
        <InputLabel id="nat">{t("nat")}</InputLabel>
        <Select
          id="nat"
          label="Nat"
          name="Nat"
          value={filterValues.nat}
          onChange={handleChangeNatValue}
        >
          {nationals.map((nat) => (
            <MenuItem key={nat} value={nat}>
              {nat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default UsersFilter;
