import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

export default function ProductCard({ product }) {
  const { addProductToCart } = useContext(CartContext); 

  async function handelAddProducToCart(id) {
    try {
      const res = await addProductToCart(id);
      if (res.data.status === "success") {
        console.log("Product added to cart:", res.data);
      } else {
        console.error("Failed to add product to cart:", res.data.message);
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  }

  return (
    <>
      <div className="overflow-hidden group">
        <Link to={`productsDetails/${product.id}/${product.category._id}`}>
          <img
            className="w-full md:h-52 object-cover object-center"
            src={product.imageCover}
            alt={product.title}
          />
          <span className="text-mainclr">{product.category.name}</span>
          <h2 className="font-semibold text-lg mb-3 mt-1">
            {product.title.split(" ", 2).join(" ")}
          </h2>
          <div className="flex justify-between">
            <span>{product.price} EGP</span>
            <span className="flex items-center">
              {product.ratingsAverage}{" "}
              <FaStar className="inline-block ms-1 text-yellow-300" />
            </span>
          </div>
        </Link>
        <button
          onClick={() => handelAddProducToCart(product.id)} 
          className="text-white group-hover:translate-y-0 duration-500 transition-all translate-y-20 w-full mt-2 bg-mainclrbold hover:bg-mainclrbold focus:ring-4 focus:ring-mainclrbg-mainclrbold font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-mainclrbold dark:hover:bg-mainclrbold focus:outline-none dark:focus:ring-mainclrbg-mainclrbold"
        >
          Add Product
        </button>
      </div>
    </>
  );
}