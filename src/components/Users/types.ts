import { IUserToEdit } from "./EditUser/types";

export enum UsersActionTypes {
  GET_USERS_LIST = "GET_USERS_LIST",
  ADD_NEW_USER = "ADD_NEW_USER",
  GET_USER_BY_ID = "GET_USER_BY_ID",
  DELETE_USERBY_ID = "DELETE_USERBY_ID",
}

export interface IUser {
  email: string;
  id: number;
  name: string;
  password: string;
  surName: string;
  createdAt: string;
  updatedAt: string;
}

export interface IAddUser {
  email: string;
  name: string;
  password: string;
  surName: string;
}

export interface IEditUser {
  email: string;
  name: string;
  surName: string;
  id: string;
}

export interface IAddNewUser {
  id?: string;
  email: string;
  name: string;
  password: string;
  surName: string;
}

export interface IUserById {
  createdAt: string;
  email: string;
  id: number;
  name: string;
  password: string;
  surName: string;
  updatedAt: string;
}



export interface IUsersState {
  users: Array<IUser>;
  userById: IUserById;
  userToEdit: IUserToEdit
}

export interface IGetUsersListAction {
  type: UsersActionTypes.GET_USERS_LIST;
  payload: Array<IUser>;
}

export interface IAddNewUserAction {
  type: UsersActionTypes.ADD_NEW_USER;
}

export interface IGetUserByIdAction {
  type: UsersActionTypes.GET_USER_BY_ID;
  payload: IUserById;
}

export interface IDeleteUserByIdAction {
  type: UsersActionTypes.DELETE_USERBY_ID;
  payload: number;
}

export type UsersAction =
  | IGetUsersListAction
  | IAddNewUserAction
  | IGetUserByIdAction
  | IDeleteUserByIdAction;
