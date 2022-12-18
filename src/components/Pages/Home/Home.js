import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";
import SingleCase from "../Cases/SingleCase";
import Banner from "../Shared/Banner";

const Home = () => {
  const services = useLoaderData();
  useTitle("Home");
  return (
    <div>
      <h1>This Home </h1>
      <Banner></Banner>
      <div className="grid grid-cols-3 my-10">
        {services?.map((item) => (
          <SingleCase key={item._id} item={item}></SingleCase>
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          to="/services"
          className="btn btn-outline btn-warning my-10 text-center"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default Home;
