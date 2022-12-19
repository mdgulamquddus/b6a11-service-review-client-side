import React from "react";
import { Link } from "react-router-dom";

const Request = () => {
  return (
    <div className="flex">
      <div className="px-28">
        <h2 className="text-3xl font-bold text-yellow-500 mb-2">
          Request a Free Case Evaluation
        </h2>
        <p>Proin eget tortor risus nulla porttitor accumsan tincidunt</p>
      </div>
      <div className="px-28">
        <Link className="btn btn-outline btn-warning">Submit Your Request</Link>
      </div>
    </div>
  );
};

export default Request;
