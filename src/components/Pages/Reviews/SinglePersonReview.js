import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import SingleReview from "./SingleReview";

const SinglePersonReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);
  return (
    <div>
      <h2>Your All Reviews</h2>
      {reviews.map((review) => (
        <SingleReview key={review._id}></SingleReview>
      ))}
    </div>
  );
};

export default SinglePersonReview;
