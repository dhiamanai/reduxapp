import { Footer, Button, Modal, Toast } from 'flowbite-react';
import React,  { useState } from 'react';
import { FaTelegramPlane } from "react-icons/fa";

const Footerr = () => {

    const [openModal, setOpenModal] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [openModal3, setOpenModal3] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleSendMessage = () => {
        setTimeout(() => setShowToast(true), 300);
        setTimeout(() => setShowToast(false), 4000); 
    };

    return (
        <Footer container className="backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 dark:bg-black/60 border-t border-gray-100 p-6 bottom-0 w-full mt-auto">
            <div className="w-full flex flex-col md:flex-row justify-between items-center">
                <Footer.Copyright by="Dhia Manai | Web Developer™" year={2024} />
                <Footer.LinkGroup className="flex flex-wrap gap-4 mt-4 md:mt-0">
                    <Footer.Link as="button" onClick={() => setOpenModal(true)} className="hover:underline">
                    About
                    </Footer.Link>
                    <Footer.Link as="button" onClick={() => setOpenModal2(true)} className="hover:underline">
                    Terms of Service
                    </Footer.Link>
                    <Footer.Link as="button" onClick={() => setOpenModal3(true)} className="hover:underline">
                    Contact
                    </Footer.Link>
                </Footer.LinkGroup>
            </div>

            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>About</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Welcome to E-Shop, your go-to destination for online purchasing of high-quality electronic products. We are proud to provide you with a convenient, secure, and user-friendly shopping experience, offering the latest technological innovations at the best prices.
                        Our mission is to simplify your life by providing a wide range of carefully selected electronic products, from cutting-edge gadgets and home appliances to essential accessories.
                        By using our platform, you agree to our Terms of Use. If you do not agree with these terms, we kindly ask you to refrain from using our services. Your satisfaction is at the heart of our commitment, and we strive to meet your needs with professionalism and transparency.
                        Thank you for choosing E-Shop as your trusted partner for all your electronic needs. We are excited to accompany you on your online shopping journey!
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='bg-emerald-600' onClick={() => setOpenModal(false)}>I accept</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>Decline</Button>
                </Modal.Footer>
            </Modal>

            <Modal dismissible show={openModal2} onClose={() => setOpenModal2(false)}>
                <Modal.Header>Terms of Service</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Welcome to E-Shop, your reference site for online purchasing of electronic products. By using this site, you agree to these Terms of Use. If you do not agree to these terms, please do not use our services.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='bg-emerald-600' onClick={() => setOpenModal2(false)}>I accept</Button>
                    <Button color="gray" onClick={() => setOpenModal2(false)}>Decline</Button>
                </Modal.Footer>
            </Modal>

            <Modal dismissible show={openModal3} onClose={() => setOpenModal3(false)}>
                <Modal.Header>Contact Us</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        We`d love to hear from you! Feel free to reach out to us using the form below or contact us directly at:
                        </p>
                        <ul className="text-gray-500 dark:text-gray-400 list-disc pl-5">
                            <li>Email: <a href="mailto:support@eshop.com" className="text-emerald-500 underline">support@eshop.com</a></li>
                            <li>Phone: <a href="tel:+123456789" className="text-emerald-500 underline">+216 53 517 392</a></li>
                            <li>Address: 123 E-Shop Street, Tunisia</li>
                        </ul>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                                <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600" placeholder="Your name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                                <input type="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600" placeholder="Your email" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                                <textarea className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600" rows="4" placeholder="Your message"></textarea>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='text-white rounded-lg bg-emerald-500 hover:bg-emerald-400 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900' onClick={() => { setOpenModal3(false); handleSendMessage(); }}>
                    Send Message
                    </Button>
                    <Button color="gray" onClick={() => setOpenModal3(false)}>Cancel</Button>
                </Modal.Footer>
            </Modal>

            {showToast && (
                <div className="fixed bottom-4 right-4 flex items-center p-4 bg-green-200 rounded-lg shadow-md dark:bg-gray-800">
                    <FaTelegramPlane className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
                    <div className="pl-4 text-sm font-normal text-gray-700 dark:text-gray-300">Message sent successfully.</div>
                </div>
            )}
        </Footer>
    );
};

export default Footerr;
