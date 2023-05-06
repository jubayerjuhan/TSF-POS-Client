import { User } from "./../../../types/userTypes.d";

export interface LoginResponse {
  success: boolean;
  token: string;
  user: User;
}
