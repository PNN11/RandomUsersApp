import { GetUsersArgs } from "api/users.types";

export interface UsersFilterProps {
  filterValues: GetUsersArgs;
  onChangeGender: (gender: string) => void;
  onChangePage: (page: number) => void;
  onChangeResultsCount: (resultsCount: number) => void;
  onChangeNat: (nat: string) => void;
}

export const nationals: string[] = [
  "AU",
  "BR",
  "CA",
  "CH",
  "DE",
  "DK",
  "ES",
  "FI",
  "FR",
  "GB",
  "IE",
  "IR",
  "NO",
  "NL",
  "NZ",
  "TR",
  "US",
];

export const results: number[] = [
  1, 2, 5, 7, 10, 12, 15, 18, 20, 25, 30, 35, 40, 45, 50,
];
