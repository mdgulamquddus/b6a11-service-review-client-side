import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Pages/Blog/Blog";
import Checkout from "../components/Pages/Checkout/Checkout";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import Orders from "../components/Pages/Orders/Orders";
import Register from "../components/Pages/Register/Register";
import EditReviews from "../components/Pages/Reviews/EditReviews";
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
        loader: async () => fetch(`http://localhost:5000/servicesLimt3`),
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: async () => fetch(`http://localhost:5000/servicesLimt3`),
      },
      {
        path: "/services",
        element: <Services></Services>,
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
        path: "/blog",
        element: <Blog></Blog>,
        loader: async () => fetch("blogs.json"),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/servicesAll/${params.id}`),
      },
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/servicesAll/${params.id}`),
      },
      {
        path: "/editReviews/:id",
        element: <EditReviews></EditReviews>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/editReviews/${params.id}`),
      },
    ],
  },
]);

export default router;
