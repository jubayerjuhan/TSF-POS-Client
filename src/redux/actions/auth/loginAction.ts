import { LOGIN_PENDING } from "../../../constants/reduxActionsNames/user";
import axios from "axios";
import { AppDispatch, RootThunk } from "../../redux";
import { LoginData } from "../../../pages/Login/types";

export const loginUser =
  (loginData: LoginData): RootThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: LOGIN_PENDING });
      const data = axios.post("https://randomuser.me/api/", loginData);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };
