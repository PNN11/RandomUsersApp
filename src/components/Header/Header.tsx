import React from "react";
import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import { HeaderProps } from "./Header.types";
import { MaterialUISwitch } from "./Header.styles";
import { setItemToLocalStorage } from "helpers/localStorage";

const Header: React.FC<HeaderProps> = ({ toggleTheme, theme }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    i18n.changeLanguage(value);
    setItemToLocalStorage("lng", value);
  };
  return (
    <Paper elevation={0}>
      <Container
        sx={{ display: "flex", justifyContent: "flex-end", gap: "35px" }}
      >
        <FormControl>
          <FormLabel color="primary">{t("changeLang")}</FormLabel>
          <RadioGroup row onChange={changeLanguage}>
            <FormControlLabel
              checked={i18n.language === "en"}
              value="en"
              control={<Radio />}
              label="En"
            />
            <FormControlLabel
              checked={i18n.language === "ru"}
              value="ru"
              control={<Radio />}
              label="Ru"
            />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel color="primary">{t("changeTheme")}</FormLabel>
          <FormControlLabel
            checked={theme === "dark"}
            onChange={toggleTheme}
            control={<MaterialUISwitch sx={{ m: 1 }} />}
            label={
              <Typography>
                {theme === "light" ? t("light") : t("dark")}
              </Typography>
            }
          />
        </FormControl>
      </Container>
    </Paper>
  );
};

export default Header;
