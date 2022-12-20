import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useTitle from "../../../Hooks/useTitle";

const EditReviews = () => {
  const review = useLoaderData();
  const navigate = useNavigate();
  const { customer, email, message, _id } = review[0];
  useTitle("Edit Reviews");

  const handleUpdateReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const message = form.message.value;
    console.log(message);
    fetch(`http://localhost:5000/reviews/${_id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ message: message }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Reviews Edited Successfully");
        }
        navigate("/reviews");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleUpdateReview}>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Enter Your Name "
            name="name"
            defaultValue={customer}
            readOnly
            className="input input-bordered input-secondary w-full "
          />

          <input
            type="text"
            placeholder="Your Email"
            defaultValue={email}
            name="email"
            readOnly
            className="input input-bordered input-secondary w-full "
          />
        </div>
        <textarea
          className="textarea textarea-primary mt-3 w-full"
          placeholder="Your Reviews"
          defaultValue={message}
          name="message"
        ></textarea>
        <input
          type="submit"
          className="btn btn-outline btn-warning mt-3"
          value="Submit Review"
        />
      </form>
    </div>
  );
};

export default EditReviews;
