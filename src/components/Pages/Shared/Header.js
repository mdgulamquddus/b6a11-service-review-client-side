import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Header = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const handleLogut = () => {
    logoutUser().then().catch();
  };
  const menuItems = (
    <>
      <Link to="/home" className="btn btn-ghost">
        Home
      </Link>
      <Link to="/services" className="btn btn-ghost">
        SERVICES
      </Link>
      <Link to="/blog" className="btn btn-ghost">
        Blog
      </Link>
      {user?.email ? (
        <>
          <Link to="/reviews" className="btn btn-ghost">
            My Reviews
          </Link>
          <Link to="/orders" className="btn btn-ghost">
            Orders
          </Link>

          <Link onClick={handleLogut} className="btn btn-ghost">
            Logout
          </Link>
        </>
      ) : (
        <Link to="/login" className="btn btn-ghost">
          Login
        </Link>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <img
          className="h-15 w-24"
          src="https://themetor.com/elementor/thelaw/wp-content/uploads/sites/5/2022/01/logo.png"
          alt=""
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <Link className="btn btn-outline btn-warning">Free Consultation</Link>
      </div>
    </div>
  );
};

export default Header;
