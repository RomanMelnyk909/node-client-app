import { IUserToEdit } from "./EditUser/types";
import { UsersAction, UsersActionTypes, IUsersState, IUserById } from "./types";

const user: IUserById = {
  createdAt: "",
  email: "",
  id: 0,
  name: "",
  password: "",
  surName: "",
  updatedAt: "",
};

const editUser: IUserToEdit = {
  name: "",
  email: "",
  id: 0,
  surName: "",
};

const initialState: IUsersState = {
  users: [],
  userById: user,
  userToEdit: editUser,
};

export const usersReducer = (state = initialState, action: UsersAction) => {
  switch (action.type) {
    case UsersActionTypes.GET_USERS_LIST:
      return { ...state, users: action.payload };

    case UsersActionTypes.GET_USER_BY_ID:
      return { ...state, userById: action.payload };

    case UsersActionTypes.DELETE_USERBY_ID:
      return {
        ...state,
        users: state.users.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
