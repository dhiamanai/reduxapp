import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from "flowbite-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { reduceQuantity, removeProduct } from '../features/Shop';

const Store = () => {
    const { value, totalprice } = useSelector((state) => state.shop);
    const dispatch = useDispatch();
    const [products, setProducts] = useState(value);
    const [total, setTotal] = useState(totalprice);

    useEffect(() => {
        setProducts(value);
        setTotal(totalprice);
    }, [value, totalprice]);

    const handleReduceQuantity = (productId) => {
        dispatch(removeProduct(productId));
    };

    return ( 
        <div>
            {products && products.length > 0 ? (
                <div className="overflow-x-auto justify-center py-8 w-full sm:w-3/4 md:w-2/4 mx-auto">
                    <Table hoverable className='shadow-sm border-2 rounded-lg'>
                        <Table.Head>
                            <Table.HeadCell>Product name</Table.HeadCell>
                            <Table.HeadCell>Category</Table.HeadCell>
                            <Table.HeadCell>Brand</Table.HeadCell>
                            <Table.HeadCell>Price</Table.HeadCell>
                            <Table.HeadCell>quantity</Table.HeadCell>
                            <Table.HeadCell>Edit</Table.HeadCell>
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
                                    <Table.Cell>{product.category}</Table.Cell>
                                    <Table.Cell>{product.brand}</Table.Cell>
                                    <Table.Cell>{product.price} TND</Table.Cell>
                                    <Table.Cell className='mx-auto'>{product.quantity}</Table.Cell>
                                    <Table.Cell>
                                        <FontAwesomeIcon 
                                            className='cursor-pointer' 
                                            icon={faMinus} 
                                            onClick={() => handleReduceQuantity(product.id)} 
                                        />
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                            <Table.Row>
                                <Table.Cell colSpan={4} className="text-right font-medium">
                                Total price: {total} TND
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center w-full sm:w-3/4 md:w-2/4 h-64 text-center mx-auto bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 m-24">
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