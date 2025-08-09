import React, { useState } from 'react';
import { Navbar } from 'flowbite-react';
import MyLogo from '../assets/eshop.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbaar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const cartItems = useSelector((state) => state.shop.value);
    const items = cartItems.reduce((sum, product) => sum + (product.quantity || 0), 0);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        console.log("Toggle clicked, new state:", !isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <Navbar fluid rounded className="sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 dark:bg-black/60 border-b border-gray-100 z-50">
            <Navbar.Brand>
                <Link to="/">
                    <img src={MyLogo} alt="Logo" className="w-[95px] h-[40px]" />
                </Link>
            </Navbar.Brand>

            <button
                onClick={handleToggle}
                className="md:hidden focus:outline-none"
            >
                ☰
            </button>

            <div className={`${isOpen ? "block" : "hidden"} md:flex w-full md:w-auto`}>
                <Link
                    to="/"
                    className="block md:inline-block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                >
                    Home
                </Link>
                <Link
                    to="/sell"
                    className="block md:inline-block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                >
                    Sell
                </Link>
                <Link
                    to="/contact"
                    className="block md:inline-block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                >
                    Contact
                </Link>
                <Link
                    className="relative block md:inline-block px-4 py-2"
                    to="/shop"
                >
                    {items > 0 && (
                        <span className="absolute -top-0 left-4 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                            {items}
                        </span>
                    )}

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                    </svg>
                </Link>
            </div>
        </Navbar>
    );
};

export default Navbaar;