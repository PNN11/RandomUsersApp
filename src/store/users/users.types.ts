import { User } from "api/users.types";
import { Statuses } from "store/types";

export interface State {
  readonly users: User[];
  readonly usersRequestStatus: Statuses;
  readonly gender: string;
  readonly page: number;
  readonly resultsCount: number;
  readonly nat: string;
}
