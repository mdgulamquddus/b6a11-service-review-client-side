import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import useTitle from "../../../Hooks/useTitle";

const Checkout = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);
  useTitle("Checkout");
  const handlePlaceholder = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = user?.email || "Unregisterd";
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      customer: name,
      price,
      email,
      phone,
      message,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      body: JSON.stringify(order),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          alert("Order Placed Successfully");
        }
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl text-center my-10 text-yellow-500 font-bold">
        You Selected This Service {title}
      </h2>
      <form onSubmit={handlePlaceholder}>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="First Name "
            name="firstName"
            className="input input-bordered input-secondary w-full "
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            className="input input-bordered input-secondary w-full "
          />
          <input
            type="text"
            placeholder="Your Phone"
            name="phone"
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
          placeholder="Your Message"
          name="message"
        ></textarea>
        <input
          type="submit"
          className="btn btn-outline btn-warning mt-3"
          value="Place Order"
        />
      </form>
    </div>
  );
};

export default Checkout;
