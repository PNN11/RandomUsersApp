import { UserRequestParams } from "api/users.types";
import { User } from "api/users.types";
import { ThunkAction } from "redux-thunk";
import { Statuses } from "store/types";

export interface State {
  readonly users: User[];
  readonly usersRequestStatus: Statuses;
  readonly gender: string;
  readonly page: number;
  readonly resultsCount: number;
  readonly nat: string;
}

export const SET_USERS_REQUEST_STATUS_PENDING =
  "SET_USERS_REQUEST_STATUS_PENDING";

export const SET_USERS_REQUEST_STATUS_FAILURE =
  "SET_USERS_REQUEST_STATUS_FAILURE";

export const SET_USERS = "SET_USERS";

export const SET_GENDER = "SET_GENDER";

export const SET_PAGE = "SET_PAGE";

export const SET_RESULTS_COUNT = "SET_RESULTS_COUNT";

export const SET_NAT = "SET_NAT";

export type SetUsersRequestStatusPendingAction = {
  type: typeof SET_USERS_REQUEST_STATUS_PENDING;
};

export type SetUsersRequestStatusPendingActionCreator =
  () => SetUsersRequestStatusPendingAction;

export type SetUsersRequestStatusFailureAction = {
  type: typeof SET_USERS_REQUEST_STATUS_FAILURE;
};

export type SetUsersRequestStatusFailureActionCreator =
  () => SetUsersRequestStatusFailureAction;

export type SetUsersRequestSuccessAction = {
  type: typeof SET_USERS;
  payload: User[];
};

export type SetUsersRequestSuccessActionCreator = (
  users: User[]
) => SetUsersRequestSuccessAction;

export type SetGenderAction = {
  type: typeof SET_GENDER;
  payload: string;
};

export type SetGenderActionCreator = (gender: string) => SetGenderAction;

export type SetPageAction = {
  type: typeof SET_PAGE;
  payload: number;
};

export type SetPageActionCreator = (page: number) => SetPageAction;

export type SetResultCountAction = {
  type: typeof SET_RESULTS_COUNT;
  payload: number;
};

export type SetResultCountActionCreator = (
  resultCount: number
) => SetResultCountAction;

export type SetNatAction = {
  type: typeof SET_NAT;
  payload: string;
};

export type SetNatActionCreator = (nat: string) => SetNatAction;

export type Actions =
  | SetUsersRequestStatusPendingAction
  | SetUsersRequestSuccessAction
  | SetUsersRequestStatusFailureAction
  | SetGenderAction
  | SetPageAction
  | SetResultCountAction
  | SetNatAction;

export type GetUsersThunk = ({
  gender,
  page,
  resultsCount,
  nat,
}: UserRequestParams) => ThunkAction<void, State, UserRequestParams, Actions>;
