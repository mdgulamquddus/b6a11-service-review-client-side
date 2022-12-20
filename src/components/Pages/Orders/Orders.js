import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
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

  const handleDelete = (id) => {
    const procced = window.confirm("Are u sure you want to delet");
    if (procced) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            toast.success("Deleted Successfully");
            const remainingOrders = orders.filter((ord) => ord._id !== id);
            setOrders(remainingOrders);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <h2 className="text-3xl text-center my-10 text-yellow-500 font-bold">
        You Have Placed All Orders
      </h2>
      {orders.length > 0 ? (
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
                {orders?.map((ord, idx) => (
                  <OrdersRow
                    key={ord._id}
                    ord={ord}
                    idx={idx}
                    handleDelete={handleDelete}
                  ></OrdersRow>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="text-center text-2xl font-bold">
          Not Placed Any Orders
        </div>
      )}
    </div>
  );
};

export default Orders;
