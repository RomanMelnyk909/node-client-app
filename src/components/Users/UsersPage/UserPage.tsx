import { useCallback, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const UserPage = () => {
  const { id } = useParams();
  const { getUserById } = useActions();
  const { userById } = useTypedSelector((store) => store.users);

  const fetchUserById = useCallback(async () => {
    if (id) {
      try {
        await getUserById(+id);
      } catch (err) {
        console.log("error in userPage => ", err);
      }
    }
  }, [getUserById, id]);

  useEffect(() => {
    fetchUserById();
  }, [fetchUserById]);

  

  return (
    <>
      <h1>{`User ${userById?.name}`}</h1>
      <ul>
        <li>{`User Surname: ${userById?.surName}`}</li>
        <li>{`User email: ${userById?.email}`}</li>
      </ul>
      <Link to="/">На головну</Link>
    </>
  );
};

export default UserPage;
