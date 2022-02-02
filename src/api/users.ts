import axios from "axios";
import { GetUsersArgs, UsersRequestAnswer } from "./users.types";

export const getUsers = async ({
  gender,
  page,
  resultsCount,
  nat,
}: GetUsersArgs) => {
  const { data } = await axios.get<UsersRequestAnswer>(
    `https://randomuser.me/api/?gender=${gender}&page=${page}&results=${resultsCount}&nat=${nat}`
  );
  return data.results;
};
