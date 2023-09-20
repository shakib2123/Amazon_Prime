import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();

  const { id, title, description, category, brand, price, thumbnail } = product;
  return (
    <div className="flex justify-center items-center my-10">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300 text-white rounded-lg space-y-3 p-4 flex flex-col max-w-xl">
        <figure className="w-full h-64">
          <img className="w-full h-full rounded-lg" src={thumbnail} alt="" />
        </figure>
        <h1 className="text-2xl">Product No. {id}</h1>
        <h1 className="text-2xl font-medium">{title}</h1>
        <h1 className="text-2xl font-semibold">Price: {price}</h1>
        <h2 className="text-2xl font-medium">Brand: {brand}</h2>
        <h3 className="text-2xl">Category: {category}</h3>
        <p className="flex-grow">
          <span className="text-lg font-medium">About:</span> {description}
        </p>
        <Link to="/products">
          <button className="bg-pink-500 text-white px-5 py-3 rounded-lg mt-5 font-bold w-full">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
