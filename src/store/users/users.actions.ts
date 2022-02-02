import * as apiUsers from "api/users";
import * as usersTypes from "./users.types";

export const setUsersRequestStatusPending: usersTypes.SetUsersRequestStatusPendingActionCreator =
  () => ({
    type: usersTypes.SET_USERS_REQUEST_STATUS_PENDING,
  });

export const setUsersRequestStatusFailure: usersTypes.SetUsersRequestStatusFailureActionCreator =
  () => ({
    type: usersTypes.SET_USERS_REQUEST_STATUS_FAILURE,
  });

export const setUsersRequestSuccess: usersTypes.SetUsersRequestSuccessActionCreator =
  (users) => ({
    type: usersTypes.SET_USERS,
    payload: users,
  });

export const getUsers: usersTypes.GetUsersThunk = ({
  gender,
  page,
  resultsCount,
  nat,
}) => {
  return (dispatch) => {
    dispatch(setUsersRequestStatusPending());

    apiUsers
      .getUsers({ gender, page, resultsCount, nat })
      .then((users) => dispatch(setUsersRequestSuccess(users)))
      .catch(() => dispatch(setUsersRequestStatusFailure()));
  };
};

export const setGender: usersTypes.SetGenderActionCreator = (gender) => ({
  type: usersTypes.SET_GENDER,
  payload: gender,
});

export const setPage: usersTypes.SetPageActionCreator = (page) => ({
  type: usersTypes.SET_PAGE,
  payload: page,
});

export const setResultCount: usersTypes.SetResultCountActionCreator = (
  resultCount
) => ({
  type: usersTypes.SET_RESULTS_COUNT,
  payload: resultCount,
});

export const setNat: usersTypes.SetNatActionCreator = (nat) => ({
  type: usersTypes.SET_NAT,
  payload: nat,
});
