import { Footer } from 'flowbite-react';
import React from 'react';

const Footerr = () => {
    return (
        <Footer container className='bg-violet-100 border-solid border-2 border-b-red-500'>
            <Footer.Copyright href="#" by="Dhia Manai | web developer™" year={2024} />
            <Footer.LinkGroup>
                <Footer.Link className='bg-gray-200' href="#">About</Footer.Link>
                <Footer.Link className='bg-gray-200' href="#">Privacy Policy</Footer.Link>
                <Footer.Link className='bg-gray-200' href="#">Licensing</Footer.Link>
                <Footer.Link className='bg-gray-200' href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
        </Footer>
    );
};

export default Footerr;