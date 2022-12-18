import { createBrowserRouter } from "react-router-dom";
import Checkout from "../components/Pages/Checkout/Checkout";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import Orders from "../components/Pages/Orders/Orders";
import Register from "../components/Pages/Register/Register";
import SinglePersonReview from "../components/Pages/Reviews/SinglePersonReview";
import ServiceDetails from "../components/Pages/Services/ServiceDetails";
import Services from "../components/Pages/Services/Services";
import Main from "../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: async () => fetch(`http://localhost:5000/servicesLimt3`),
      },
      {
        path: "/services",
        element: (
          <PrivateRoute>
            <Services></Services>
          </PrivateRoute>
        ),
      },
      {
        path: "/reviews",
        element: <SinglePersonReview></SinglePersonReview>,
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/checkout/:id",
        element: <Checkout></Checkout>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/servicesAll/${params.id}`),
      },
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/servicesAll/${params.id}`),
      },
    ],
  },
]);

export default router;
