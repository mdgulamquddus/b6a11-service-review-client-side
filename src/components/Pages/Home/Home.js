import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import Banner from "../Shared/Banner";

const Home = () => {
  const user = useContext(AuthContext);
  console.log(user.displayName);
  return (
    <div>
      <h1>This Home </h1>
      <Banner></Banner>
    </div>
  );
};

export default Home;
