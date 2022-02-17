import { createAsyncThunk } from "@reduxjs/toolkit";

import { UserRequestParams } from "api/users.types";
import * as apiUsers from "api/users";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async ({ gender, page, resultsCount, nat }: UserRequestParams) => {
    return await apiUsers.getUsers({ gender, page, resultsCount, nat });
  }
);
