import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getUsers } from "./users.actions";
import { Statuses } from "store/types";
import * as usersTypes from "./users.types";

export const initialState: usersTypes.State = {
  users: [],
  usersRequestStatus: Statuses.UNCALLED,
  gender: "male",
  page: 1,
  resultsCount: 10,
  nat: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setGender(state, action: PayloadAction<string>) {
      state.gender = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setResultCount(state, action: PayloadAction<number>) {
      state.resultsCount = action.payload;
    },
    setNat(state, action: PayloadAction<string>) {
      state.nat = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.usersRequestStatus = Statuses.PENDING;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.usersRequestStatus = Statuses.SUCCESS;
    });
    builder.addCase(getUsers.rejected, (state) => {
      state.usersRequestStatus = Statuses.FAILURE;
    });
  },
});

export const { setGender, setPage, setResultCount, setNat } =
  usersSlice.actions;

export const usersReducer = usersSlice.reducer;
