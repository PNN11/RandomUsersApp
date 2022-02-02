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

export const usersReducer = (
  state = initialState,
  action: usersTypes.Actions
) => {
  switch (action.type) {
    case usersTypes.SET_USERS_REQUEST_STATUS_PENDING:
      return { ...state, usersRequestStatus: Statuses.PENDING };
    case usersTypes.SET_USERS_REQUEST_STATUS_FAILURE:
      return { ...state, usersRequestStatus: Statuses.FAILURE };
    case usersTypes.SET_USERS:
      return {
        ...state,
        users: action.payload,
        usersRequestStatus: Statuses.SUCCESS,
      };
    case usersTypes.SET_GENDER:
      return { ...state, gender: action.payload };
    case usersTypes.SET_PAGE:
      return { ...state, page: action.payload };
    case usersTypes.SET_RESULTS_COUNT:
      return { ...state, resultsCount: action.payload };
    case usersTypes.SET_NAT:
      return { ...state, nat: action.payload };
    default:
      return state;
  }
};
