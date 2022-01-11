import { Button } from "primereact/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUserById } from "../types";
import { Modal } from "react-bootstrap";
import { useActions } from "../../../hooks/useActions";

export interface Props {
  user: IUserById;
}

const UserItem: React.FC<Props> = ({ user: { id, name, surName, email } }) => {
  const navigate = useNavigate();
  const [showModfal, setShowModal] = useState(false);
  const { deleteUserById } = useActions();
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const deleteItem = () => {
    console.log("work", id);
    deleteUserById(id);
    handleClose();
  };

  return (
    <>
      <tr className="table-secondary">
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{surName}</td>
        <td>{email}</td>
        <td>
          <Button
            onClick={() => navigate(`/users/${id}`)}
            label=""
            icon="pi pi-user"
            className="p-button-rounded p-button-success "
          />
          <Button
            onClick={() => navigate(`/editUser/${id}`)}
            label=""
            icon="pi pi-cog"
            className="p-button-rounded p-button-warning ms-3"
          />
          <Button
            onClick={() => {
              handleShow();
            }}
            label=""
            icon="pi pi-trash"
            className="p-button-rounded p-button-danger ms-3"
          />
        </td>
      </tr>
      <Modal show={showModfal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{`Підтвердіть видалення ${name}`}</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button
            className="p-button-rounded p-button-info"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            className="p-button-rounded p-button-danger"
            onClick={() => {
              deleteItem();
            }}
          >
            Видалити
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserItem;
