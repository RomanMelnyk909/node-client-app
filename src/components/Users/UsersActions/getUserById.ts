import { Dispatch } from "react";
import http from "../../../http";
import { IUser, UsersAction, UsersActionTypes } from "../types";


export const getUserById = (id: number) =>  {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
          const response = await http.get<IUser>(`api/users/${id}`); 
         
          dispatch({
            type: UsersActionTypes.GET_USER_BY_ID,
             payload: response.data,
            
          });
        } catch (error) {
          console.log("error from action getUserById => ", error);
        }
      };
}