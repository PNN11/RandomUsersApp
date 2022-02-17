import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { usersReducer } from "./users";

const reducer = combineReducers({
  users: usersReducer,
});

const store = configureStore({ reducer });

export default store;
