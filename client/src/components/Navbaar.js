import React from 'react';
import { Navbar } from 'flowbite-react';
import MyLogo from '../assets/eshop.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Navbaar() {
    const { items } = useSelector((state) => state.shop);
    
    return (
        <Navbar fluid rounded className="sticky top-0 bg-violet-100 shadow-xl border-b-2 border-b-red-500 z-50">
            <Navbar.Brand >
                <Link to='/'>
                    <img
                        src={MyLogo}
                        alt="Logo"
                        className="w-[95px] h-[40px]"
                    />
                </Link>
            </Navbar.Brand>
        
            <Navbar.Toggle />

            <Navbar.Collapse>

                <Link 
                    to='/'
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={100} 
                    className='hover:bg-gray-200 active:bg-gray-400 cursor-pointer' >
                         Home
                </Link>

                <Link 
                    to='/sell' 
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={100} 
                    className='hover:bg-gray-200 active:bg-gray-400 cursor-pointer' >
                         Sell
                </Link>
                <Link 
                    to='/contact' 
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={100} 
                    className='hover:bg-gray-200 active:bg-gray-400 cursor-pointer' >
                         contact
                </Link>

                <Link
                    className="relative"
                    to="/shop"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={100}
                >
                    {items > 0 ? (
                        <div className="absolute -top-2 left-4">
                            <p className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                {`${items}`}
                            </p>
                        </div>
                    ) : null}

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
               
            </Navbar.Collapse>
        </Navbar>
    );
}