import { Dispatch } from "react";
import http from "../../../http";
import { IUserToEdit } from "../EditUser/types";
import { UsersAction, UsersActionTypes } from "../types";

export const editUser = (values: IUserToEdit) => {
  return async (dispatch: Dispatch<UsersAction>) => {
    try {
      const response = await http.put("api/users/edit", values);
      console.log("edit work");
      dispatch({
        type: UsersActionTypes.ADD_NEW_USER,
      });
    } catch (error) {
      console.log("error from action => ", error);
    }
  };
};
