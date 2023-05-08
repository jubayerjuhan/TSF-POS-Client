import { User } from "../../../types/userTypes";

export interface FetchUsersSuccess {
  success: boolean;
  users: User[];
}
