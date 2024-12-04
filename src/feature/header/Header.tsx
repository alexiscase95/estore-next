"use client";

import Link from "next/link";
import React from "react";

import HeaderLogo from "./components/Logo";

const Header = () => {
  return (
    <header>
    <nav aria-label="Main navigation" className="bg-gray-100 p-4 text-black">
      <div className="flex max-w-full justify-between">
        <HeaderLogo />
        <ul className="flex space-x-4">
          <li>
            <Link href="/" aria-label="Go to Home" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link href="/categories" aria-label="View Categories" className="hover:text-gray-300">Categories</Link>
          </li>
          <li>
            <Link href="/product/wiper-blades" aria-label="View Product" className="hover:text-gray-300">Product</Link>
          </li>
          <li>
            <Link href="/cart" aria-label="View Cart" className="hover:text-gray-300">Cart</Link>
          </li>
          <li>
            <Link href="/checkout" aria-label="Proceed to Checkout" className="hover:text-gray-300">Checkout</Link>
          </li>
          <li>
            <Link href="/order-confirmation" aria-label="View Order History" className="hover:text-gray-300">Order Confirmation</Link>
          </li>
          <li>
            <Link href="/order-history" aria-label="View Order History" className="hover:text-gray-300">Order History</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  
  );
};

export default Header;