import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Components/CartContext";
import ProductImage1 from "../Image/product1.jpg"; // Replace with actual images
import ProductImage2 from "../Image/product1.jpg"; // Replace with actual images
import { FaShippingFast, FaExchangeAlt, FaLock, FaCashRegister, FaTags } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCard = () => {
  const { cart, dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: product.id, quantity: existingProduct.quantity + 1 },
      });
    } else {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...product, quantity: 1 },
      });
    }
    navigate("/cart");
  };

  const handleBuyNow = (product) => {
    navigate("/checkout", { state: { product } });
  };

  const products = [
    {
      id: 1,
      name: "MooRopan",
      price: 12800, // Use number for price
      oldPrice: 15000, // Use number for oldPrice
      discount: "15%",
      description:
        "Featuring soft foam cushioning and lightweight, woven fabric in the upper, the Jordan Proto-Lyte is perfect for runners. Make your cattle's healthcare effortless with MooRopan!",
      image: ProductImage1,
      brand: "BrandX",
      ratings: "4.5",
      reviews: 30,
    },
    {
      id: 2,
      name: "MooRopan Advanced",
      price: 15000, // Use number for price
      oldPrice: 18000, // Use number for oldPrice
      discount: "16%",
      description:
        "For improved cattle health with extra protection. Perfect for your livestock's daily care.",
      image: ProductImage2,
      brand: "BrandX",
      ratings: "4.7",
      reviews: 45,
    },
  ];

  const offers = [
    "Upto ₹2,000.00 discount on select Credit Cards, select Debit Cards",
    "No Cost EMI on Amazon Pay ICICI Bank Credit Cards",
    "Get GST invoice and save up to 28% on business purchases",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const generateProductCard = (product) => {
    return (
      <div
        key={product.id}
        className="bg-white  my-5 border rounded-lg shadow-lg p-6 max-w-4xl mx-auto flex flex-col md:flex-row mb-6 transition-transform duration-300 transform hover:scale-105"
      >
        {/* Product Image */}
        <div className="md:w-1/3 flex justify-center items-center mb-4 md:mb-0">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg w-full h-auto transition-transform duration-300 transform hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-2/3 md:pl-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
            <p className="text-sm text-gray-600 mb-1">Brand: {product.brand}</p>
            <p className="text-sm text-yellow-500 mb-4">
              ⭐ {product.ratings} ({product.reviews} reviews)
            </p>
            <p className="text-gray-700 text-sm mb-4">{product.description}</p>

            <div className="mb-4 flex items-center space-x-2">
              <span className="bg-red-500 text-white px-2 py-1 rounded">Limited time deal</span>
              <span className="text-red-600 font-bold">-{product.discount}</span>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                ₹{product.price}{" "}
                <span className="line-through text-gray-500">₹{product.oldPrice}</span>
              </h3>
            </div>

            {/* Offers Section */}
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <FaTags className="text-orange-500 mr-2" /> Offers
              </h4>
              <Slider {...settings} className="mb-4">
                {offers.map((offer, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-3 rounded shadow-md text-sm text-gray-700 flex items-center"
                  >
                    <FaTags className="text-orange-500 mr-2" /> {offer}
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <button
              className="flex-1 min-w-[120px] px-6 py-2 bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-400 transition-all"
              onClick={() =>
                handleAddToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,  // Pass price as number
                  image: product.image,
                })
              }
            >
              Add to Cart
            </button>

            <button
              className="flex-1 min-w-[120px] px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-400 transition-all"
              onClick={() =>
                handleBuyNow({
                  id: product.id,
                  name: product.name,
                  price: product.price,  // Pass price as number
                  image: product.image,
                })
              }
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen space-y-6">
      {products.map((product) => generateProductCard(product))}
    </div>
  );
};

export default ProductCard;