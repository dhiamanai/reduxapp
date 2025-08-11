import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <div id="Hero" className="relative overflow-hidden bg-white dark:bg-black">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.06),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />

            <div className="grid max-w-screen-xl min-h-[70vh] md:min-h-[80vh] lg:min-h-[88vh] mx-auto gap-8 lg:gap-8 xl:gap-0 py-10 lg:py-16 lg:grid-cols-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="mr-auto place-self-center lg:col-span-7 px-6"
                >
                    <h1 className="max-w-2xl mb-6 text-5xl font-semibold tracking-tight leading-tight md:text-6xl xl:text-7xl text-gray-900 dark:text-white">
                        Discover your next device.
                    </h1>
                    <p className="max-w-2xl mb-10 text-gray-600 md:text-lg dark:text-gray-400">
                        Beautifully engineered products. Effortless shopping experience.
                    </p>

                    <div className="flex items-center gap-4">
                        <Link
                            to="/shop"
                            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white rounded-full bg-gray-900 hover:bg-black transition-colors dark:bg-white dark:text-black"
                        >
                            Shop now
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </Link>
                        <Link
                            to="/sell"
                            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-900 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors dark:text-white dark:border-gray-700 dark:hover:bg-gray-800"
                        >
                            Sell a product
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
                    className="hidden md:flex md:col-span-5 md:items-center md:justify-center"
                >
                    <img
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
                        className="object-contain h-48 sm:h-64 md:h-80 lg:h-3/4 drop-shadow-xl"
                        alt="mockup"
                    />
                </motion.div>
            </div>
        </div>
    );

};

export default HeroSection;