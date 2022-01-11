import { useFormik } from "formik";
import { IAddUser } from "../types";
import InputGroup from "../../layout/InputGroup";
import { AddCarSchema as validationSchema } from "../validation";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";



const initialValues: IAddUser = {
  email: "",
  name: "",
  password: "",
  surName: "",
};

const AddUser = () => {

  const navigate = useNavigate();
  const {addUser} = useActions()

  const onSubmit = async (values: IAddUser) => {
    try {
      await addUser(values);
      navigate('/')
    }
    catch(err) {
      console.log('add user err => ' , err)
    }
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
          <Button type="submit" label="Додати юзера" icon="pi pi-check" />
        </div>
      </form>
      <div className="col-4"></div>
    </div>
  );
};

export default AddUser;
