import React from 'react';

const Contact = () => {
    return (
       
        <div className="w-2/4 mx-auto  p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center">Contact Us</h2>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 text-center mt-4">
        We’d love to hear from you! Feel free to reach out to us using the form below or contact us directly at:
            </p>
            <ul className="text-gray-600 dark:text-gray-400 list-none space-y-3 mt-4">
                <li>
                    <span className="font-medium">Email:</span>{" "}
                    <a href="mailto:support@eshop.com" className="text-blue-500 hover:underline">
                support@eshop.com
                    </a>
                </li>
                <li>
                    <span className="font-medium">Phone:</span>{" "}
                    <a href="tel:+123456789" className="text-blue-500 hover:underline">
                +123 456 789
                    </a>
                </li>
                <li>
                    <span className="font-medium">Address:</span> 123 E-Shop Street, Online City, Webland
                </li>
            </ul>
            <form className="space-y-6 mt-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
                    </label>
                    <input
                        type="text"
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
                    </label>
                    <input
                        type="email"
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your email"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
                    </label>
                    <textarea
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        rows="4"
                        placeholder="Your message"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
            Send Message
                </button>
            </form>
        </div>

    );
};
 
export default Contact;