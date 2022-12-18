import React from "react";
import { Link } from "react-router-dom";

const ReviewsRow = ({ rev, idx }) => {
  const { email, customer, message } = rev;
  console.log(rev);
  return (
    <tr>
      <th>{`${idx + 1}`}</th>
      <td>{email}</td>
      <td>{customer}</td>
      <td>{message}</td>
      <td>
        <Link className="btn btn-outline btn-error">Edit</Link>
      </td>
    </tr>
  );
};

export default ReviewsRow;
