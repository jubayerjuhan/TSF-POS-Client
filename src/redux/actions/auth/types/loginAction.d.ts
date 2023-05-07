import { User } from "../../../../types/userTypes";

export interface LoginResponse {
  success: boolean;
  token: string;
  user: User;
}
