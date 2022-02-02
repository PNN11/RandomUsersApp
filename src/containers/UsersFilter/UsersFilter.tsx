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
import { UsersFilterProps, nationals, results } from "./UsersFilter.types";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  getSlice,
  setGender,
  setNat,
  setPage,
  setResultCount,
} from "store/users";

const UsersFilter: React.FC<UsersFilterProps> = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { gender, page, resultsCount, nat } = useSelector(getSlice);

  const handleChangeGenderValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setGender(e.currentTarget.value));
  };

  const handleChangePageValue = (
    e: React.ChangeEvent<unknown>,
    value: number
  ) => {
    dispatch(setPage(value));
  };

  const handleChangeResultsCountValue = (e: SelectChangeEvent<number>) => {
    dispatch(setResultCount(Number(e.target.value)));
  };

  const handleChangeNatValue = (e: SelectChangeEvent) => {
    dispatch(setNat(e.target.value));
  };

  return (
    <Stack direction="row" sx={{ justifyContent: "space-between", padding: 2 }}>
      <div>
        <Typography>
          {t("gender")}:{gender === "male" ? t("male") : t("female")}{" "}
        </Typography>
        <ToggleButtonGroup value={gender}>
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
          {t("page")}: {page}
        </Typography>
        <Pagination count={50} page={page} onChange={handleChangePageValue} />
      </Stack>
      <FormControl sx={{ width: 0.2 }}>
        <InputLabel id="results">{t("results")}</InputLabel>
        <Select
          id="results"
          label="Results"
          name="Results"
          value={resultsCount}
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
          value={nat}
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
