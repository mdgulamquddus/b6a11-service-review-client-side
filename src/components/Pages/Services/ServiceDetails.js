import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";
import Reviews from "../Reviews/Reviews";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceDetails = () => {
  const { title, description, img, _id } = useLoaderData();
  useTitle("Service Deatils");
  console.log();
  return (
    <div>
      <h2 className="text-center text-2xl font-bold text-yellow-500 mb-5">
        {title} Service Details{" "}
      </h2>
      <PhotoProvider>
        <PhotoView src={img}>
          <img className="w-full rounded-sm" src={img} alt="" />
        </PhotoView>
      </PhotoProvider>

      <p className="mb-10">{description}</p>
      <Reviews id={_id} title={title}></Reviews>
    </div>
  );
};

export default ServiceDetails;
