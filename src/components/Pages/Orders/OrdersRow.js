import React from "react";
import { Link } from "react-router-dom";

const OrdersRow = ({ ord, idx }) => {
  const { serviceName, customer, message } = ord;
  return (
    <tr>
      <th>{`${idx + 1}`}</th>
      <td>{serviceName}</td>
      <td>{customer}</td>
      <td>{message}</td>
      <td>
        <Link className="btn btn-outline btn-error">Delete</Link>
      </td>
    </tr>
  );
};

export default OrdersRow;
