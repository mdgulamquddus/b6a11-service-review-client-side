import React, { useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import useTitle from "../../../Hooks/useTitle";
import SingleCase from "../Cases/SingleCase";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  useTitle("Services");
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/servicesAll`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2 className="text-center text-yellow-500 font-bold text-3xl">
        Our Services
      </h2>
      <div>
        {!loading && (
          <div className="grid grid-cols-3 gap-4 my-10">
            {services?.map((item) => (
              <SingleCase key={item._id} item={item}></SingleCase>
            ))}
          </div>
        )}
        {loading && (
          <div className="flex justify-center my-40">
            <CirclesWithBar
              height="100"
              width="100"
              color="#e67e22"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              outerCircleColor=""
              innerCircleColor=""
              barColor=""
              ariaLabel="circles-with-bar-loading"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
