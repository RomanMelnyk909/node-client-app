import { Dispatch } from "react";
import http from "../../../http";
import { IUser, UsersAction, UsersActionTypes } from "../types";

export const getUsers = () => {
  return async (dispatch: Dispatch<UsersAction>) => {
    try {
      const response = await http.get<Array<IUser>>("api/users");
      dispatch({
        type: UsersActionTypes.GET_USERS_LIST,
        payload: response.data,
      });
    } catch (error) {
      console.log("error from action => ", error);
    }
  };
};


