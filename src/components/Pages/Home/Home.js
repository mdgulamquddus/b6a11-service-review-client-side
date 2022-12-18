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
      {services?.map((item) => (
        <SingleCase key={item._id} item={item}></SingleCase>
      ))}
      <Link to="/services" className="btn btn-success">
        View All
      </Link>
    </div>
  );
};

export default Home;
