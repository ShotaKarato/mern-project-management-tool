import React from "react";
import { useClients } from "../Hooks/queries/useClients";
import ClientRow from "./ClientRow.jsx";
import Loading from "./Loading";

const Clients = () => {
  const { data, loading, error } = useClients();

  if (error) return <p>Something went wrong</p>;
  if (loading) return <Loading />;

  return (
    <table className="table table-hover mt-3">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.clients.map((client) => (
          <ClientRow key={client.id} client={client} />
        ))}
      </tbody>
    </table>
  );
};

export default Clients;
