import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-6 justify-between p-5 shadow-lg">
      <h2 className="text-3xl text-center md:text-left font-bold text-pink-700">
        Amazon Prime
      </h2>
      <div className="flex justify-center md:justify-end">
        <div className="space-x-9">
          <NavLink className="text-xl font-bold" to="/">
            Home
          </NavLink>
          <NavLink className="text-xl font-bold" to="/products">
            Products
          </NavLink>
          <NavLink className="text-xl font-bold" to="/dashboard">
            Dashboard
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
