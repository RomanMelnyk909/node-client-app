import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./components/layout/DefaultLayout";
import HomePage from "./components/layout/HomePage";
import AddUser from "./components/Users/AddUser/AddUser";
import EditUserPage from "./components/Users/EditUser/EditUserPage";

import UserPage from "./components/Users/UsersPage/UserPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/editUser/:id" element={<EditUserPage />} />
        <Route path="/users/:id" element={<UserPage />} />
      </Route>
    </Routes>
  );
}

export default App;
