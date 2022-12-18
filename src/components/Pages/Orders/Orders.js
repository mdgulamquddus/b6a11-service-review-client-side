import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import useTitle from "../../../Hooks/useTitle";
import OrdersRow from "./OrdersRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  useTitle("Orders");
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);
  return (
    <div>
      <h2 className="text-3xl text-center my-10 text-yellow-500 font-bold">
        You Have Placed All Orders
      </h2>
      {orders ? (
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
                {orders?.map((ord, idx) => (
                  <OrdersRow key={ord._id} ord={ord} idx={idx}></OrdersRow>
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

export default Orders;
