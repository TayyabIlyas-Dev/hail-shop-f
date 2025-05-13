"use client";

import { urlForImage } from "../../sanity/lib/image";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsSuitHeartFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import { FavouritesContext } from "../context/FavouritesContext";
import { useToast } from "../context/ToastContext";
import Products from "./Products";
import { motion } from "framer-motion";
import Reviews from "./Reviews";
// import Footer from "./Footer";

const ProductDetails = ({ product }: any) => {
  const [first, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  // Contexts
  const { cartItems, addProduct, qty, decQty, incQty }: any =
    useContext(CartContext);
  const {
    addProduct: addToFavourites,
    removeProduct: removeFromFavourites,
    isFavourite,
  }: any = useContext(FavouritesContext) || {};
  const { showToast } = useToast();

  const isFav = isFavourite ? isFavourite(product) : false;

  const descriptionStyle =
    product.description.length > 40
      ? "text-[13px] text-gray-600 overflow-hidden rounded-lg pb-2 border-gray-300 max-h-[60px] overflow-y-auto px-1 custom-scrollbar"
      : "text-[12px]";

  // const qtySection =

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  // Add to Cart Handler
  const handleAddToCart = () => {
    if (qty > product.inventory) {
      showToast("Not enough inventory available!");
      return;
    }

    addProduct(product, qty);
    product.inventory -= qty; // 🛒 Inventory se qty minus ho jayegi
    showToast("Item added to the cart!");
  };

  // Add/Remove from Favourites Handler
  const handleToggleFavourite = () => {
    if (!addToFavourites || !removeFromFavourites) {
      showToast("Favourites functionality is unavailable.");
      return;
    }

    if (isFav) {
      removeFromFavourites(product);
      showToast("Item removed from favourites!");
    } else {
      addToFavourites(product);
      showToast("Item added to favourites!");
    }
  };
  const withoutDiscountPrice = product.discount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  return (
    <div className="product-details-section mt-20">
      <div className="product-details-container">
        {/* Left Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <div>
            {product.discount > 0 && (
              <div className="relative top-11 left-7 ">
                <div className="w-12 group">
                  {/* Upper Box */}
                  <div className="bg-black  text-white text-center font-bold px-1 rounded-t-md">
                    <span className="text-[8px]">{product.discount}</span>
                    <span className="text-[9px]"> %OFF</span>
                  </div>

                  {/* Triangle */}
                  <div
                    className="w-0 h-0 border-l-[24px] border-r-[24px] border-t-[12px] border-l-transparent border-r-transparent 
               border-t-black   mx-auto"
                  ></div>
                </div>
              </div>
            )}
            {/* Main Image */}
            <div className="h-[260px] flex items-center mb-[24px] border rounded-lg mx-5 hover:shadow-md">
              <Image
                src={urlForImage(product.images[first]).url()}
                alt={product.images[first].alt || "Product Image"}
                width={300}
                height={320}
                className="object-contain mx-auto h-[240px] py-6 px-2 hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Thumbnails */}
            <div className="small-images-container mx-4">
              {product.images?.map((item: any, i: number) => (
                <Image
                  key={i}
                  src={urlForImage(product.images[i]).url()}
                  alt={item.alt || "Product Image"}
                  width={140}
                  height={100}
                  className="object-contain p-2  h-16 sm:h-32 md:h-20 lg:h-32 border mx-auto rounded-xl hover:cursor-pointer hover:shadow-md hover:scale-105 transition-transform duration-500"
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <div className="flex flex-col gap-8 md:pt-3 pt-0">
            <div className="flex px-4 flex-col gap-2">
              <div className="text-3xl  font-bold">{product.name}</div>
              {/* <div className="text-xl font-medium">
                <span className="text-green-500">$ </span>{" "}
                {Math.floor(withoutDiscountPrice)}
                <span className= " mb-3 text-[11px] text-red-400">&nbsp; {product.discount}% off</span> 

                <s className="text-gray-400 text-[10px] px-2  ">
                  <span className="text-green-200">$ </span>
                  {product.price}
                </s>
              </div> */}

              <div className="text-xl  font-medium flex items-center gap-2 relative">
                {/* Current Price */}
                <span className="text-green-500 p-1">$</span>
                {Math.floor(withoutDiscountPrice)}

                {/* Unique Discount Design */}
                {/* <motion.div
    className="relative text-[12px] font-bold px-0 py-1 rounded-md"
    initial={{ rotate: -5, scale: 0.8, opacity: 0 }}
    animate={{ rotate: 0, scale: 1, opacity: 1 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    <span className="absolute -top-1 -right-2 w-4 h-4 bg-red-300 rounded-full animate-ping"></span>
    <span className="text-red-500 bg-yellow-200 px-2 py-[2px] rounded-md shadow-md shadow-red-300">
      {product.discount}% OFF
    </span>
  </motion.div> */}
                {/* Original Price with Neon Glow */}
                {product.discount > 0 && (
                  <div className=" ">
                    <s className="text-red-500 text-[10px] px-1 relative">
                      <span className="text-green-400">$</span>
                      {product.price}
                      {/* <span className="absolute -bottom-1 left-1/2 w-8 h-[1px] bg-pink-400 blur-sm"></span> */}
                    </s>
                    <motion.span
                      className="relative text-[9px] font-bold px-2 py-0 rounded-md"
                      initial={{ rotate: -5, scale: 0.8, opacity: 0 }}
                      animate={{ rotate: 0, scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <span className="text-white bg-black px-2 py-[3px] rounded-lg shadow-sm ">
                        {product.discount}% OFF
                      </span>
                    </motion.span>
                  </div>
                )}
              </div>

              <div className={`p-1 pb-2 text-gray-600 font-medium ${descriptionStyle}`}>
                {product.description}
              </div>
            </div>

            {/* Quantity Section */}
            <p
              className={`mb-1 px-4 font-medium text-[12px] ${
                product.inventory > 8
                  ? "text-green-600"
                  : product.inventory > 0
                    ? "text-orange-500"
                    : "text-red-600"
              }`}
            >
              {product.inventory > 8
                ? `Current Inventory: ${product.inventory} items`
                : product.inventory > 0
                  ? `Hurry! Only ${product.inventory} items left in inventory`
                  : "Out of Stock"}
            </p>
            {/* 
            <div className="flex gap-2 items-center">
              <h3>Quantity</h3>
              <p className="quantity-desc flex items-center border-black rounded-md hover:shadow-md">
                <span className="minus" onClick={decQty}>
                  <AiOutlineMinus />
                </span>
                <span className="num">{qty}</span>
                <span
                  className={`plus ${qty >= product.inventory ? "opacity-50 cursor-not-allowed" : ""}`}
                  onClick={qty < product.inventory ? incQty : undefined} // Disable click
                >
                  <AiOutlinePlus />
                </span>
              </p>
            </div> */}
            {product.inventory > 0 && (
              <div id="qty-section" className="flex gap-3 px-4 items-center">
                <h3 className="text-lg font-semibold text-gray-700">
                  Quantity
                </h3>

                <div className="flex items-center bg-white/40 backdrop-blur-md border border-gray-300 rounded-full px-3 py-2 shadow-md transition-all duration-500 hover:shadow-lg hover:scale-[1.01]">
                  <button
                    className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-transform duration-200 active:scale-90"
                    onClick={decQty}
                  >
                    <AiOutlineMinus size={12} className="text-gray-700" />
                  </button>

                  <span className="px-5 text-lg font-bold text-gray-800">
                    {qty}
                  </span>

                  <button
                    className={`p-3 rounded-full transition-transform duration-200 active:scale-90 ${
                      qty >= product.inventory
                        ? "opacity-50 cursor-not-allowed"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                    onClick={qty < product.inventory ? incQty : undefined}
                  >
                    <AiOutlinePlus size={12} className="text-gray-700" />
                  </button>
                </div>
              </div>
            )}
            <div className="flex gap-3">
              {/* Add to Cart Button */}
              <button
                className=" add-to-cart hover:px-2 ml-3 shadow-sm hover:scale-105 transition-all duration-300"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>

              {/* Add/Remove from Favourites Button */}
              <button
                className={`${
                  isFav
                    ? "bg-red-100 text-red-500 hover:bg-red-100 border-2 border-red-600"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 border-2 border-gray-700"
                }  w-24 h-16 flex items-center mt-0  justify-center  cursor-pointer hover:scale-105 transition-all duration-500`}
                onClick={handleToggleFavourite}
              >
                <BsSuitHeartFill />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className=" mt-24 pb-0 p-2">
        <Reviews />
      </div>
      {/* See More Button */}
      <div className="flex pt-6 items-center border-y-2 bg-[#f0eeeec8] justify-center">
        <button
          className="relative my-6 mx-10 font-semibold text-gray-800 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-gray-800 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
          onClick={toggleShowMore}
        >
          {showMore ? "See Less " : "See More Products"}
        </button>
      </div>

      {/* Conditional rendering of extra information */}
      {showMore && (
        <div className="more-info ">
          <div>
            <div className="bg-[#FAFAFA]  pb-0 pt-16 text-center">
              <h1 className="text-3xl font-bold">Best Selling Products</h1>
              <h1 className="">Enjoy Up To 50%</h1>
            </div>

            <Products />
          </div>
        </div>
      )}
      {/* <Footer /> */}
    </div>
  );
};

export default ProductDetails;
