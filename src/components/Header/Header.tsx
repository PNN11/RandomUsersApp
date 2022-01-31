import React from "react";
import { Container, FormControlLabel, Paper } from "@mui/material";
import { HeaderProps } from "./Header.types";
import { MaterialUISwitch } from "./Header.styles";

const Header: React.FC<HeaderProps> = ({ toggleTheme, theme }) => {
  return (
    <Paper elevation={0}>
      <Container sx={{ textAlign: "right" }}>
        <FormControlLabel
          onChange={toggleTheme}
          control={<MaterialUISwitch sx={{ m: 1 }} />}
          label={theme ? theme : "theme"}
        />
      </Container>
    </Paper>
  );
};

export default Header;
