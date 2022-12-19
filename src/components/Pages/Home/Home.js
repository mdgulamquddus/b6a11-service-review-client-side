import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";
import SingleCase from "../Cases/SingleCase";
import Banner from "../Shared/Banner";
import ExpertTeam from "./ExpertTeam";
import Request from "./Request";

const Home = () => {
  const services = useLoaderData();
  useTitle("Home");
  return (
    <div className="mx-auto">
      <div className="mb-10">
        <Banner></Banner>
      </div>
      <h2 className="text-center text-yellow-500 font-bold text-3xl">
        Services
      </h2>
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
      <h2 className="text-center text-yellow-500 font-bold text-3xl">
        Case Evaluation
      </h2>
      <div className="flex items-center my-10 bg-slate-500 rounded-md h-40 ">
        <Request></Request>
      </div>
      <h2 className="text-center text-yellow-500 font-bold text-3xl">
        Our Expert Lawyer
      </h2>
      <div className="my-10 container mx-4">
        <ExpertTeam></ExpertTeam>
      </div>
    </div>
  );
};

export default Home;
