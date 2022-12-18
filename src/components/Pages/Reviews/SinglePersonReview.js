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
        <div>Not Placed Any Orders</div>
      )}
    </div>
  );
};

export default SinglePersonReview;
