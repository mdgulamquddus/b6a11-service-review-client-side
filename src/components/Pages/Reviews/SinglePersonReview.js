import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import ReviewsRow from "./ReviewsRow";

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
      {reviews ? (
        <>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Service Name</th>
                  <th>Customer Name</th>
                  <th>Message</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {reviews?.map((rev, idx) => (
                  <ReviewsRow key={rev._id} rev={rev} idx={idx}></ReviewsRow>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div>Not Placed Any Orders</div>
      )}
    </div>
  );
};

export default SinglePersonReview;
