import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import useTitle from "../../../Hooks/useTitle";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { loginInUser, loginWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useTitle("Login");

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginInUser(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        // jwt token
        fetch(`http://localhost:5000/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("theLaw-token", data.token);
            navigate(from, { replace: true });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  const handleGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);

        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            The Law is organized to serve you and your needs. With dedicated
            teams focused on the specific issues facing a wide variety of
            Canadian businesses, non-profits, and individuals, we provide
            representation in every major area of U.S. law. We understand how
            changes in the law, along with related developments in your industry
            and the larger economy, may affect you and your business. And as a
            firm that gets the big picture, we also understand that every detail
            counts.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="mt-3">
              Don't Have An Account?{" "}
              <Link className="text-yellow-600 font-bold ml-2" to="/register">
                Register
              </Link>
            </p>
          </form>
          <div className="text-center">
            <h2 className="text-yellow-600 font-bold">Social Login</h2>
            <hr className="mt-2 w-60 mx-auto" />
            <button onClick={handleGoogle} className="my-5">
              <FaGoogle className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
