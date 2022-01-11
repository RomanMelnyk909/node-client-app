import { useFormik } from "formik";
import { IAddUser } from "./types";
import http from "../../http";
import InputGroup from "../layout/InputGroup";
import { AddCarSchema as validationSchema } from "./validation";
import { useEffect } from "react";

const initialValues: IAddUser = {
    email: "",
    name: "",
    password: "",
    surName: "",
  };

const UserEditPage = (id: string) => {
  
  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await http.get(`api/users/${id}`);
    console.log(response)
  };

  const onSubmit = async (values: IAddUser) => {
    console.log(values);
    const response = await http.post("api/users", values);
    console.log(response);
  };

  

  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit,
    validateOnBlur: true,
  });

  return (
    <div className="row">
      <h1 className="text-center">Додати користувача</h1>

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
        <InputGroup
          field="password"
          label="Password"
          type="password"
          touched={formik.touched.password}
          error={formik.errors.password}
          value={formik.values.password as string}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Додати юзера
          </button>
        </div>
      </form>
      <div className="col-4"></div>
    </div>
  );
};

export default UserEditPage;
