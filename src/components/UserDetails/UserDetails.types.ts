import { UserType } from "api/users.types";
import { TFunction } from "react-i18next";

export interface UserDetailsProps extends UserType {
  t: TFunction<"translation", undefined>;
}
