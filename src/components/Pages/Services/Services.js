import React, { useEffect, useState } from "react";
import useTitle from "../../../Hooks/useTitle";
import SingleCase from "../Cases/SingleCase";

const Services = () => {
  const [services, setServices] = useState([]);
  useTitle("Services");
  useEffect(() => {
    fetch(`http://localhost:5000/servicesAll`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>This Service Page</h1>
      <div className="grid grid-cols-3 gap-4 my-10">
        {services?.map((item) => (
          <SingleCase key={item._id} item={item}></SingleCase>
        ))}
      </div>
    </div>
  );
};

export default Services;
