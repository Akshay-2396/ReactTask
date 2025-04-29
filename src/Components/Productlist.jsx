import React from "react";
import { IoIosCart } from "react-icons/io";

const Productlist = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded shadow">
          <img
            src={product.image}
            alt={product.title}
            className="h-40 mx-auto object-contain"
          />
          <h2 className="font-semibold mt-2 text-sm">{product.title}</h2>
          <p className="text-sm font-semibold text-red-500">
            Rating: {product.rating?.rate}/5 <br />
            <span className="text-yellow-700">
              Count: {product.rating?.count}
            </span>
          </p>

          <p className="text-green-700 font-bold">Price: ${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-900 text-white w-full py-2 rounded mt-2 hover:bg-red-900 hover:scale-90 transition flex justify-center gap-2"
          >
            Add to Cart
            <IoIosCart size={25} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Productlist;
