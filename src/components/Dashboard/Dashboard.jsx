import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex mt-9">
      <div className="w-full md:w-1/3 flex flex-col space-y-3 bg-slate-100 rounded p-8 shadow-lg">
        <NavLink
          className="text-xl font-medium rounded-lg p-2 hover:bg-gray-300"
          to="/dashboard"
        >
          Profile
        </NavLink>
        <NavLink
          className="text-xl font-medium rounded-lg p-2 hover:bg-gray-300"
          to="/dashboard/settings"
        >
          Settings
        </NavLink>
        <NavLink
          className="text-xl font-medium rounded-lg p-2 hover:bg-gray-300"
          to="/about"
        >
          About Us
        </NavLink>
      </div>
      <div className="flex justify-center items-center bg-pink-100 h-screen w-full rounded-r">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
