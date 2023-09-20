import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { id, brand, category, description, images, price } = product;
  return (
    <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-200  rounded-lg space-y-3 p-4 flex flex-col">
      <figure className="w-full h-64">
        <img className="w-full h-full rounded-lg" src={images[0]} alt="" />
      </figure>
      <h1 className="text-2xl font-semibold">Price: {price}</h1>
      <h2 className="text-2xl font-medium">Brand: {brand}</h2>
      <h3 className="text-2xl">Category: {category}</h3>
      <p className="flex-grow">
        <span className="text-lg font-medium">About:</span> {description}
      </p>
      <Link to={`/product/${id}`}>
        <button className="bg-pink-500 text-white px-5 py-3 rounded-lg mt-5 font-bold w-full">
          See Details
        </button>
      </Link>
    </div>
  );
};

export default Product;
