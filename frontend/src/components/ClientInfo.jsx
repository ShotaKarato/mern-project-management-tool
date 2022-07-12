import React from "react";
import { FaIdBadge, FaPhone, FaEnvelope } from "react-icons/fa";

const ClientInfo = ({ client: { id, name, email, phone } }) => {
  return (
    <>
      <h5 className="mt-5">Client Information</h5>
      <ul className="list-group">
        <li className="list-group-item">
          <FaIdBadge className="icon" />
          {name}
        </li>
        <li className="list-group-item">
          <FaPhone className="icon" />
          {phone}
        </li>
        <li className="list-group-item">
          <FaEnvelope className="icon" />
          {email}
        </li>
      </ul>
    </>
  );
};

export default ClientInfo;
