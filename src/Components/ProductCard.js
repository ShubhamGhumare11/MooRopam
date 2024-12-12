import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Components/CartContext"; // Correct import for useCart
import ProductImage1 from "../Image/product1.jpg"; 
import ProductImage2 from "../Image/product1.jpg";
import { FaTags } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCard = () => {
  const { cart, dispatch } = useCart(); // Use the useCart hook
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
      price: 12800,
      oldPrice: 15000,
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
      price: 15000,
      oldPrice: 18000,
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

  return (
    <div className="p-4 bg-gray-100 min-h-screen space-y-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white my-5 border rounded-lg shadow-lg p-6 max-w-4xl mx-auto flex flex-col md:flex-row mb-6 transition-transform duration-300 transform hover:scale-105"
        >
          <div className="md:w-1/3 flex justify-center items-center mb-4 md:mb-0">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg w-full h-auto transition-transform duration-300 transform hover:scale-105"
            />
          </div>

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

              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaTags className="text-xl mr-2" />
                  Offers:
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  {offers.map((offer, index) => (
                    <li key={index} className="text-gray-600 text-sm">{offer}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-yellow-500 text-white px-6 py-2 rounded-md shadow-lg hover:bg-yellow-600 transition duration-300"
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleBuyNow(product)}
                className="bg-green-600 text-white px-6 py-2 rounded-md shadow-lg hover:bg-green-700 transition duration-300"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* <div className="w-full mt-10">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="p-4">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg w-full h-auto"
              />
              <h3 className="text-xl font-bold text-gray-800 mt-4">{product.name}</h3>
            </div>
          ))}
        </Slider>
      </div> */}
    </div>
  );
};

export default ProductCard;
