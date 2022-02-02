import { RootState } from "store/types";
import { State as UsersState } from "./users.types";

export const getSlice = (state: RootState): UsersState => state.users;
