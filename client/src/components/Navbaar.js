import React from 'react';
import {Link} from 'react-scroll';
import { Navbar } from 'flowbite-react';
import MyLogo from '../assets/eshop.png';

export default function Navbaar() {
    return (
        <Navbar fluid rounded  className="sticky top-0 bg-violet-100 shadow-xl border-solid border-2 border-b-red-500 z-50">
            <Navbar.Brand >
                <img
                    src={MyLogo}
                    alt="Logo"
                    className="w-[95px] h-[40px]"
                />
            </Navbar.Brand>
        
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link 
                    as={Link}
                    to='Hero'
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={100} 
                    className='hover:bg-gray-200 active:bg-red-700 cursor-pointer' >
                         Home
                </Navbar.Link>
                <Navbar.Link 
                    as={Link}
                    to='Form' 
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={100} 
                    className='hover:bg-gray-200 active:bg-violet-700 cursor-pointer' >
                         Sell
                </Navbar.Link>
                <Navbar.Link className='hover:bg-gray-200 active:bg-red-700' href="#" >Services</Navbar.Link>
                <Navbar.Link className='hover:bg-gray-200 active:bg-red-700' href="#" >Pricing</Navbar.Link>
                <Navbar.Link className='hover:bg-gray-200 active:bg-red-700' href="#" >Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}