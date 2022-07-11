import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDeleteClient } from "../Hooks/mutations";

const ClientRow = ({ client }) => {
  const [deleteClient] = useDeleteClient(client.id);
  return (
    <tr key={client.id}>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
