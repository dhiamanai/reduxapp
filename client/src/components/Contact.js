import React, {useState, useEffect} from 'react';
import { FaTelegramPlane } from "react-icons/fa";
import contactusImage from '../assets/undraw_contact-us.svg';

const Contact = () => {
    const [showToast, setShowToast] = useState(false);
    
    const handleSendMessage = (e) => {
        e.preventDefault(); // Empêche le rechargement automatique de la page
        // Simule l'envoi de message
        localStorage.setItem("messageSent", "true"); // Enregistre l'état dans localStorage
        window.location.reload(); // Recharge la page
    };

    useEffect(() => {
        // Vérifie si le message a été envoyé avec succès
        if (localStorage.getItem("messageSent") === "true") {
            setShowToast(true);
            localStorage.removeItem("messageSent"); // Supprime l'état après l'affichage
            setTimeout(() => setShowToast(false), 4000); // Cache le toast après 4s
        }
    }, []);
    return (
       
        <div className="mx-auto flex flex-row p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-10">

            <div className=' mx-auto flex flex-col items-center justify-center h-full'>
                <img src={contactusImage} alt="My SVG Image" className="h-96 py-4 w-2/3" />
            </div>

            <div className='w-1/3 mx-auto'>     
                <h2 className="text-2xl font-bold text-emerald-700 dark:text-gray-100 text-center">Contact Us</h2>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 text-center mt-4">
        We’d love to hear from you! Feel free to reach out to us using the form below or contact us directly at:
                </p>
                <ul className="text-gray-600 dark:text-gray-400 list-none space-y-3 mt-4">
                    <li>
                        <span className="font-medium">Email:</span>{" "}
                        <a href="mailto:support@eshop.com" className="text-emerald-700 hover:underline">
                support@eshop.com
                        </a>
                    </li>
                    <li>
                        <span className="font-medium">Phone:</span>{" "}
                        <a href="tel:+21653517392" className="text-emerald-700 hover:underline">
                +216 53 517 392
                        </a>
                    </li>
                    <li>
                        <span className="font-medium">Address:</span> 123 E-Shop Street, Tunisia
                    </li>
                </ul>
                <form onSubmit={handleSendMessage} className="space-y-6 mt-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
                        </label>
                        <input
                            type="text"
                            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-emerald-500 focus:border-emerald-400 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
                        </label>
                        <input
                            type="email"
                            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-emerald-500 focus:border-emerald-400 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Your email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
                        </label>
                        <textarea
                            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-emerald-500 focus:border-emerald-400 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            rows="4"
                            placeholder="Your message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-6 py-3 text-white rounded-lg bg-emerald-500 hover:bg-emerald-400 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                    >
            Send Message
                    </button>
                </form>
            </div>

            {/* Toast */}
            {showToast && (
                <div className="fixed bottom-4 right-4 flex items-center p-4 bg-green-200 rounded-lg shadow-md dark:bg-gray-800">
                    <FaTelegramPlane className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
                    <div className="pl-4 text-sm font-normal text-gray-700 dark:text-gray-300">
                                    Message sent successfully.
                    </div>
                </div>)
            }

        </div>

    );
};
 
export default Contact;