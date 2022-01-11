import * as GetUsersActionCreator from "../../components/Users/UsersActions/getUsersAction";
import * as AddUserActionCreator from "../../components/Users/UsersActions/addUserAction";
import * as GetUserByIdActionCreator from "../../components/Users/UsersActions/getUserById";
import * as DeleteUserByIdActionCreator from "../../components/Users/UsersActions/deleteUserAction";
import * as EditUserActionCreator from "../../components/Users/UsersActions/editUser";

const actions = {
  ...GetUsersActionCreator,
  ...AddUserActionCreator,
  ...GetUserByIdActionCreator,
  ...DeleteUserByIdActionCreator,
  ...EditUserActionCreator,
};

export default actions;
