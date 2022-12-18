import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Reviews = ({ id, title }) => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, [reviews, id]);
  const handleReview = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = user?.email;
    const name = form.name.value;
    const message = form.message.value;

    const review = {
      email,
      customer: name,
      serviceName: title,
      message,
      id,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      body: JSON.stringify(review),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          alert("Review Placed Successfully");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="mb-5 text-2xl font-bold text-yellow-500">
        All Customer Reviews
      </div>
      {reviews.map((review) => (
        <div key={review._id} className="card w-96 bg-base-100 shadow-xl mb-3">
          <div className="card-body">
            <div className="flex gap-3">
              <div className="card-title">
                {user.photoURL ? (
                  <div className="avatar mb-5">
                    <div className="w-12 rounded">
                      <img src={user.photoURL} alt="" />
                    </div>
                  </div>
                ) : (
                  <div className="avatar mb-5">
                    <div className="w-12 rounded">
                      <img src="https://placeimg.com/192/192/people" alt="" />
                    </div>
                  </div>
                )}
              </div>
              <p>{review.customer}</p>
            </div>
            <p>{review.message}</p>
          </div>
        </div>
      ))}
      <h2 className="text-2xl font-bold text-yellow-500 mb-2">
        Please Add Your Reviews
      </h2>
      {user?.email ? (
        <>
          <form onSubmit={handleReview}>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Enter Your Name "
                name="name"
                className="input input-bordered input-secondary w-full "
              />

              <input
                type="text"
                placeholder="Your Email"
                defaultValue={user?.email}
                name="email"
                readOnly
                className="input input-bordered input-secondary w-full "
              />
            </div>
            <textarea
              className="textarea textarea-primary mt-3 w-full"
              placeholder="Your Reviews"
              name="message"
            ></textarea>
            <input
              type="submit"
              className="btn btn-outline btn-warning mt-3"
              value="Submit Review"
            />
          </form>
        </>
      ) : (
        <div>
          Please{" "}
          <Link className="text-yellow-500" to="/login">
            Login
          </Link>
          For Review
        </div>
      )}
    </div>
  );
};

export default Reviews;
