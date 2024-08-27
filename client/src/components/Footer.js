import { Footer } from 'flowbite-react';
import React from 'react';

const Footerr = () => {
    return (
        <Footer container className='bg-violet-100'>
            <Footer.Copyright href="#" by="Dhia Manai | web developer™" year={2024} />
            <Footer.LinkGroup>
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Licensing</Footer.Link>
                <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
        </Footer>
    );
};

export default Footerr;