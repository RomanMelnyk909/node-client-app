import { useFormik } from "formik";
import { IUserToEdit } from "./types";
import InputGroup from "../../layout/InputGroup";
import { AddCarSchema as validationSchema } from "./validation";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import { useNavigate, useParams } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import { useCallback, useEffect } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const EditUserPage = () => {
  const navigate = useNavigate();
  const { editUser } = useActions();
  const { getUserById } = useActions();
  const { id } = useParams();
  const { userById } = useTypedSelector((store) => store.users);

  const fetchUserById = useCallback(async () => {
    try {
      const data = await getUserById(id as any);
      console.log(data);
    } catch (err) {
      console.log("error in userPage => ", err);
    }
  }, [getUserById, id]);

  useEffect(() => {
    fetchUserById();
  }, []);

  const initialValues: IUserToEdit = {
    name: `${userById.name}`,
    email: `${userById.email}`,
    surName: `${userById.surName}`,
    id: userById.id,
  };

  const onSubmit = async (values: IUserToEdit) => {
    console.log("values => ", values);
    try {
      await editUser(values);
      navigate("/");
    } catch (err) {
      console.log("add user err => ", err);
    }
  };

  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit,
    validateOnBlur: true,
    enableReinitialize: true,
  });

  return (
    <div className="row">
      <h1 className="text-center">Редагувати користувача</h1>

      <div className="col-4"></div>

      <form className="col-4" onSubmit={(e) => formik.handleSubmit(e)}>
        <InputGroup
          field="name"
          label="Ім'я"
          type="text"
          touched={formik.touched.name}
          error={formik.errors.name}
          value={formik.values.name as string}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <InputGroup
          field="surName"
          label="Прізвище"
          type="text"
          touched={formik.touched.surName}
          error={formik.errors.surName}
          value={formik.values.surName as string}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <InputGroup
          field="email"
          label="Email"
          type="email"
          touched={formik.touched.email}
          error={formik.errors.email}
          value={formik.values.email as string}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <div className="text-center">
          <Button type="submit" label="Додати юзера" icon="pi pi-check" />
        </div>
      </form>
      <div className="col-4"></div>
    </div>
  );
};

export default EditUserPage;
