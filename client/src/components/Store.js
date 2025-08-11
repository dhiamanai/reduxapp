import React, { useMemo } from 'react';
import { Table } from "flowbite-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../features/Shop';

const Store = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.shop.value);
    const total = useMemo(
        () => products.reduce((sum, product) => sum + (product.totalPrice || 0), 0),
        [products]
    );

    const handleRemoveProduct = (productId) => {
        dispatch(removeProduct(productId));
    };

    return ( 
        <div>
            {products && products.length > 0 ? (
                <div className="overflow-x-auto justify-center py-6 sm:py-8 w-full sm:w-11/12 md:w-3/4 lg:w-2/3 mx-auto px-2 sm:px-0">
                    <Table hoverable className='shadow-sm border-2 dark:border-gray-700 rounded-lg'>
                        <Table.Head className="bg-gray-50 dark:bg-gray-900">
                            <Table.HeadCell className="text-gray-700 dark:text-gray-200">Product name</Table.HeadCell>
                            <Table.HeadCell className="text-gray-700 dark:text-gray-200">Category</Table.HeadCell>
                            <Table.HeadCell className="text-gray-700 dark:text-gray-200">Brand</Table.HeadCell>
                            <Table.HeadCell className="text-gray-700 dark:text-gray-200">Price</Table.HeadCell>
                            <Table.HeadCell className="text-gray-700 dark:text-gray-200">Quantity</Table.HeadCell>
                            <Table.HeadCell className="text-gray-700 dark:text-gray-200">Edit</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {products.map((product, index) => (
                                <Table.Row 
                                    key={product.id} 
                                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                >
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {index+1}. {product.model}
                                    </Table.Cell>
                                    <Table.Cell className="text-gray-700 dark:text-gray-200">{product.category}</Table.Cell>
                                    <Table.Cell className="text-gray-700 dark:text-gray-200">{product.brand}</Table.Cell>
                                    <Table.Cell className="text-gray-700 dark:text-gray-200">{product.price} TND</Table.Cell>
                                    <Table.Cell className='mx-auto text-gray-700 dark:text-gray-200'>{product.quantity}</Table.Cell>
                                    <Table.Cell>
                                        <FontAwesomeIcon 
                                            className='cursor-pointer' 
                                            icon={faMinus} 
                                            onClick={() => handleRemoveProduct(product.id)} 
                                        />
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                            <Table.Row>
                                <Table.Cell colSpan={4} className="text-right font-medium text-gray-800 dark:text-gray-100">
                                Total price: {total} TND
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center w-11/12 sm:w-3/4 md:w-2/4 min-h-[12rem] text-center mx-auto bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 my-10 sm:my-16">
                    <svg
                        className="w-24 h-28 text-gray-400 dark:text-gray-600 mb-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 3h2l.4 2m0 0L6.8 9m0 0H19m0 0l1 5m-14.6-5h13.2M6.8 9l1.2-6m1.6 0h6.8m0 0L17 9m-7.4 5h6.8M3 3L3 9.6m14 9.4a2 2 0 01-4 0m-6 0a2 2 0 114 0m6 0h-4"
                        ></path>
                    </svg>
                    <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">Your cart is empty</p>
                    <p className="text-gray-500 dark:text-gray-400 mt-6">
                    Looks like you haven’t added anything to your cart yet. 
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 ">
                    Start exploring our collection!
                    </p>
                    <button
                        className="mt-6 px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                        onClick={() => window.location.href = '/'} // Redirect to home page
                    >
                    Start Shopping
                    </button>
                </div>
            )}
        </div>
    );
};
 
export default Store;