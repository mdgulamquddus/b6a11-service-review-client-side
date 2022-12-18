import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const Reviews = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>This is review page</h1>
    </div>
  );
};

export default Reviews;
