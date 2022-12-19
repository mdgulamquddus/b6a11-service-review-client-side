import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import useTitle from "../../../Hooks/useTitle";
import ReviewsRow from "./ReviewsRow";

const SinglePersonReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitle("Single Person Reviews");
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const procced = window.confirm("Are u sure you want to delet");
    if (procced) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Deleted Successfully");
            const remainingReviews = reviews.filter((ord) => ord._id !== id);
            setReviews(remainingReviews);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <h2 className="text-center text-yellow-500 font-bold text-3xl my-10">
        Your All Reviews
      </h2>
      {reviews.length > 0 ? (
        <>
          <div className="overflow-x-auto mb-40">
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
                  <ReviewsRow
                    key={rev._id}
                    rev={rev}
                    idx={idx}
                    handleDelete={handleDelete}
                  ></ReviewsRow>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="text-center text-2xl font-bold">
          Not Placed Any Reviews
        </div>
      )}
    </div>
  );
};

export default SinglePersonReview;
