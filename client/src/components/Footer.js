import { Footer } from 'flowbite-react';
import React from 'react';
import {Link} from 'react-scroll';

const Footerr = () => {
    return (
        <Footer container className='bg-violet-100 '>
            <Footer.Copyright href="" by="Dhia Manai | web developer™" year={2024} />
            <Footer.LinkGroup>
                <Footer.Link 
                    as={Link}
                    to='Data'
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={100} 
                    className='bg-gray-200' href="#">About</Footer.Link>
                <Footer.Link className='bg-gray-200' href="#">Privacy Policy</Footer.Link>
                <Footer.Link className='bg-gray-200' href="#">Licensing</Footer.Link>
                <Footer.Link className='bg-gray-200' href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
        </Footer>
    );
};

export default Footerr;