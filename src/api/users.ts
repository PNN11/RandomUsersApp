import axios from "axios";
import { GetUsersArgs } from "./users.types";

export const getUsers = async ({
  gender,
  page,
  resultsCount,
  nat,
}: GetUsersArgs) => {
  const { data } = await axios.get(
    `https://randomuser.me/api/?gender=${gender}&page=${page}&results=${resultsCount}&nat=${nat}`
  );
  return data.results;
};
