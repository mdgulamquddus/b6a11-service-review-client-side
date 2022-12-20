import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";

const OrdersRow = ({ ord, idx, handleDelete }) => {
  const { serviceName, customer, message, _id } = ord;
  useTitle("Orders Row");
  return (
    <tr>
      <th>{`${idx + 1}`}</th>
      <td>{serviceName}</td>
      <td>{customer}</td>
      <td>{message}</td>
      <td>
        <Link
          onClick={() => handleDelete(_id)}
          className="btn btn-outline btn-error"
        >
          Delete
        </Link>
      </td>
    </tr>
  );
};

export default OrdersRow;
