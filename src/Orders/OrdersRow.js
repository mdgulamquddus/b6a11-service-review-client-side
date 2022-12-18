import React from "react";

const OrdersRow = ({ ord, idx }) => {
  const { serviceName, customer, message } = ord;
  return (
    <tr>
      <th>{`${idx + 1}`}</th>
      <td>{serviceName}</td>
      <td>{customer}</td>
      <td>{message}</td>
      <td>
        <button className="btn btn-outline btn-error">Delete</button>
      </td>
    </tr>
  );
};

export default OrdersRow;
