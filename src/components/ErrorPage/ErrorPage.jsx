import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center space-y-2">
        <h1 className="text-4xl">Ooops sorry !!</h1>
        <h2 className="text-3xl">Nothing found here....</h2>
        <Link to="/">
          <button className="bg-pink-700 text-white px-5 py-3 rounded-lg mt-5 font-bold">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
