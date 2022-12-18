import React from "react";
import { Link } from "react-router-dom";

const ReviewsRow = ({ rev, idx, handleDelete }) => {
  const { customer, message, serviceName, _id } = rev;
  return (
    <tr>
      <th>{`${idx + 1}`}</th>
      <td>{serviceName}</td>
      <td>{customer}</td>
      <td>{message}</td>
      <td>
        <Link
          to={`/editReviews/${_id}`}
          className="btn btn-outline btn-success mr-2"
        >
          Edit
        </Link>
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

export default ReviewsRow;
