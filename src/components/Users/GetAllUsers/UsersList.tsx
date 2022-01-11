
import { useEffect} from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import UserItem from "./UserItem";


const UsersList = () => {
  const { users } = useTypedSelector((store) => store.users);
  const { getUsers, deleteUserById } = useActions();
  
  useEffect(() => {
    getUsers();
  }, [deleteUserById]);

  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <UserItem user={user} key={index}/>
          ))}
        </tbody>
      </table>
      
    </>
  );
};

export default UsersList;
