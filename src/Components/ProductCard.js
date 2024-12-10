import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

import ProductImage1 from '../Image/product1.jpg';
import ProductImage2 from '../Image/product2.png';

const ProductCard = () => {
  const { cart, setCart } = useCart();

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const products = [
    {
      id: 1,
      name: 'MooRoopan The Cattel Health Product SILOROPAN',
      description: 'Our Product Facilate better management of Herd .Our affordable products reduce cow morbidility,enhance milk quantity and quality',
      details: 'Soft foam cushioning and lightweight design for runners.',
      price: 12800,
      image: ProductImage1,
      bgColor: 'green-400',
    },
    {
      id: 2,
      name: 'MooRoopan The Cattel Health Product SILOROPAN',
      description: 'Our Product Facilate better management of Herd .Our affordable products reduce cow morbidility,enhance milk quantity and quality',
      details: 'Finest agricultural products for productive farming.',
      price: 15500,
      image: ProductImage2,
      bgColor: 'green-800',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8">
      {products.map((product) => (
        <div
          key={product.id}
          className={`bg-${product.bgColor} text-light-green-100 rounded-lg shadow-xl p-8 w-full max-w-7xl flex`}
        >
          <div className="w-1/2 flex justify-center items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-64 md:w-72 rounded-lg transition-transform duration-500 transform hover:scale-110"
            />
          </div>

          <div className="w-1/2 p-4">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 animate-pulse">
              {product.name}
            </h2>
            <p className="text-lg md:text-xl font-medium text-green-400 mb-4 animate-fadeIn">
              {product.description}
            </p>
            <p className="text-green-900 text-sm md:text-base mb-6">{product.details}</p>
            <h3 className="text-2xl md:text-3xl font-semibold text-green-300 mb-6 animate-zoom">
              Rs. {product.price}
            </h3>
            <div className="space-x-4">
            <Link to="/cart"> <button
                className="px-6 py-2 bg-green-700 text-green-200 rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button></Link> 
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
