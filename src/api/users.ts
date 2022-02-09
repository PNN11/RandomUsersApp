import axios from "axios";
import { UserRequestParams, UserResponceSuccess } from "./users.types";

export const getUsers = async ({
  gender,
  page,
  resultsCount,
  nat,
}: UserRequestParams) => {
  const { data } = await axios.get<UserResponceSuccess>(
    `https://randomuser.me/api/?gender=${gender}&page=${page}&results=${resultsCount}&nat=${nat}`
  );
  return data.results;
};
