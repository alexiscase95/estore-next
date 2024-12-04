import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
    <nav className="bg-gray-100 text-black p-4">
      <div className="max-w-full flex justify-between">
        <div className="text-lg font-bold">Estore</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" aria-label="Go to Home" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link href="/categories" aria-label="View Categories" className="hover:text-gray-300">Categories</Link>
          </li>
          <li>
            <Link href="/product" aria-label="View Product" className="hover:text-gray-300">Product</Link>
          </li>
          <li>
            <Link href="/cart" aria-label="View Cart" className="hover:text-gray-300">Cart</Link>
          </li>
          <li>
            <Link href="/checkout" aria-label="Proceed to Checkout" className="hover:text-gray-300">Checkout</Link>
          </li>
          <li>
            <Link href="/orderhistory" aria-label="View Order History" className="hover:text-gray-300">Order History</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  
  );
};

export default Header;