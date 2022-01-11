import { combineReducers } from "redux";
import { usersReducer } from "../../components/Users/reduser";

export const rootReducer = combineReducers({
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
