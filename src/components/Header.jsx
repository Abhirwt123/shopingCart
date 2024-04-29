import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((store) => store.cart);
  const navigate = useNavigate();
  const handleCart = () => {
    navigate('/cart')
  }
  const handleProductPage = () => {
    navigate('/')
  }
  return (
    <header className="bg-gray-900 text-white py-4 px-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-semibold">Your Product</span>
        </div>
        <div className="flex items-center">
          <ul className="flex space-x-4 mr-4">
            <li>
              <a href="#" className="hover:text-gray-400" onClick={handleProductPage}>Products</a>
            </li>
          </ul>
          <div className="relative">
            <p className="text-3xl cursor-pointer" onClick={handleCart}>🛒</p>
            <span className="absolute -top-1 -right-2 bg-red-600 rounded-full px-2 py-1 text-white text-xs font-bold">
              {cartItems.length}
            </span>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
