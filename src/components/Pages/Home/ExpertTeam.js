import React from "react";
import useTitle from "../../../Hooks/useTitle";

const ExpertTeam = () => {
  useTitle("Expert Team");
  return (
    <div className="grid grid-cols-4 mx-auto ">
      <div className="card w-60 bg-base-300 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://themetor.com/elementor/thelaw/wp-content/uploads/sites/5/2022/04/team41.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Mark Brown</h2>
          <p>Lawyer</p>
        </div>
      </div>
      <div className="card w-60 bg-base-300 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://themetor.com/elementor/thelaw/wp-content/uploads/sites/5/2022/04/team11.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Steve Jones</h2>
          <p>Lawyer</p>
        </div>
      </div>
      <div className="card w-60 bg-base-300 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://themetor.com/elementor/thelaw/wp-content/uploads/sites/5/2022/04/team31.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Jane Doe</h2>
          <p>Lawyer</p>
        </div>
      </div>
      <div className="card w-60 bg-base-300 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://themetor.com/elementor/thelaw/wp-content/uploads/sites/5/2022/04/team21.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Alex Darayov</h2>
          <p>Lawyer</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertTeam;
