import React from "react";
import { Link } from "react-router-dom";

const SingleCase = ({ item }) => {
  const { title, price, _id, img } = item;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price : {price}</p>
        <div className="card-actions justify-end">
          <Link className="btn btn-outline btn-warning">Buy Now</Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCase;
