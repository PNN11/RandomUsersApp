import { ThemeContextType } from "providers/ThemeProvider/ThemeProvider.types";
import { TFunction } from "react-i18next";

export interface HeaderProps extends ThemeContextType {
  t: TFunction<"translation", undefined>;
  i18n: any;
}
