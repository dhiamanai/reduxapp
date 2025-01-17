import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return(
        <div id="Hero" className="grid max-w-screen-xl h-[90vh] mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 items-center dark:bg-slate-800">
        
            <div className="mr-auto place-self-center lg:col-span-7 -mt-8">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Payments tool for software companies
                </h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
                </p>

                {/* Utilisation de Link pour naviguer */}
                <Link 
                    to="/shop" 
                    className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-emerald-500 hover:bg-emerald-400 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                Go to Shop
                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path 
                            fillRule="evenodd" 
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                            clipRule="evenodd">
                        </path>
                    </svg>
                </Link>

                <Link
                    to='/sell'
                    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                Sell a product
                </Link>
            </div>
            <div className="hidden lg:flex lg:col-span-5 lg:items-center lg:justify-center -mt-8">
                <img 
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" 
                    className="object-contain h-3/4" 
                    alt="mockup" 
                />
            </div>            
        </div>

    );

};

export default HeroSection;