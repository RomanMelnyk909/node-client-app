import { Dispatch } from "react";
import http from "../../../http";
import { IAddUser, UsersAction, UsersActionTypes } from "../types";

export const addUser = (values: IAddUser) => {
  return async (dispatch: Dispatch<UsersAction>) => {
    try {
      const response = await http.post("api/users", values);
      dispatch({
        type: UsersActionTypes.ADD_NEW_USER,
      });
    } catch (error) {
      console.log("error from action => ", error);
    }
  };
};
