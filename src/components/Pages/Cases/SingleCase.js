import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import useTitle from "../../../Hooks/useTitle";

const SingleCase = ({ item }) => {
  const { title, price, _id, img, description } = item;
  useTitle("Service");
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={img}>
            <img src={img} alt="" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0, 100)} ... </p>
        <p>Price : $ {price}</p>
        <div className="card-actions justify-between">
          <Link
            to={`/serviceDetails/${_id}`}
            className="btn btn-outline btn-warning"
          >
            Details
          </Link>
          <Link to={`/checkout/${_id}`} className="btn btn-outline btn-warning">
            Add Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCase;
