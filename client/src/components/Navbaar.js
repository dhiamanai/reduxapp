import React, { useEffect, useState } from 'react';
import { Navbar } from 'flowbite-react';
import MyLogo from '../assets/eshop.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbaar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(() => {
        try {
            return (localStorage.getItem('theme') || 'light') === 'dark';
        } catch {
            return false;
        }
    });
    const cartItems = useSelector((state) => state.shop.value);
    const items = cartItems.reduce((sum, product) => sum + (product.quantity || 0), 0);

    const handleToggle = () => {
        setIsOpen(!isOpen);
        console.log("Toggle clicked, new state:", !isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) root.classList.add('dark');
        else root.classList.remove('dark');
        try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch {}
    }, [isDark]);

    const toggleDark = () => setIsDark((prev) => !prev);

    return (
        <Navbar fluid rounded className="sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 dark:bg-black/60 border-b border-gray-100 z-50">
            <Navbar.Brand>
                <Link to="/">
                    <img src={MyLogo} alt="Logo" className="w-20 h-8 sm:w-[95px] sm:h-[40px]" />
                </Link>
            </Navbar.Brand>

            <button
                onClick={handleToggle}
                className="md:hidden focus:outline-none"
            >
                ☰
            </button>

            <div className={`${isOpen ? "block" : "hidden"} md:flex w-full md:w-auto text-center md:text-left`}>
                <Link
                    to="/"
                    className="block md:inline-block px-4 py-2"
                    onClick={handleLinkClick}
                >
                    Home
                </Link>
                <Link
                    to="/sell"
                    className="block md:inline-block px-4 py-2"
                    onClick={handleLinkClick}
                >
                    Sell
                </Link>
                <Link
                    to="/contact"
                    className="block md:inline-block px-4 py-2"
                    onClick={handleLinkClick}
                >
                    Contact
                </Link>
                <Link
                
                    className="relative flex items-center justify-center px-4 py-2"
                    to="/shop"
                >
                    {items > 0 && (
                        <span className="absolute -top-1 left-1/2 -translate-x-1/2 transform flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
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
                <button
                    type="button"
                    aria-label="Toggle dark mode"
                    onClick={toggleDark}
                    className="ml-0 md:ml-2 mt-2 md:mt-0 inline-flex items-center justify-center rounded-full p-2"
                >
                    {isDark ? (
                        // Sun icon (switch to light)
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                            <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
                            <path fillRule="evenodd" d="M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 18a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm10-9a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM4 12a1 1 0 01-1 1H2a1 1 0 110-2h1a1 1 0 011 1zm13.657 6.657a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM7.464 5.05a1 1 0 010 1.414L6.757 7.17A1 1 0 115.343 5.757l.707-.707a1 1 0 011.414 0zm11.313-1.414a1 1 0 010 1.414l-.707.707A1 1 0 1116.95 4.05l.707-.707a1 1 0 011.414 0zM7.464 18.95a1 1 0 010 1.414l-.707.707A1 1 0 114.343 19.95l.707-.707a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        // Moon icon (switch to dark)
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                        </svg>
                    )}
                </button>
            </div>
        </Navbar>
    );
};

export default Navbaar;