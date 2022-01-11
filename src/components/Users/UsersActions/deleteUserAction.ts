import { Dispatch } from "react";
import http from "../../../http";
import { IUser, UsersAction, UsersActionTypes } from "../types";


export const deleteUserById = (id: number) =>  {
    return async (dispatch: Dispatch<UsersAction>) => {
      console.log("start delete");
        try {
          const response = await http.delete<IUser>(`api/users/${id}`); 
          
          dispatch({
            type: UsersActionTypes.DELETE_USERBY_ID,
            payload: id
          });
        } catch (error) {
          console.log("error from action getUserById => ", error);
        }
      };
}