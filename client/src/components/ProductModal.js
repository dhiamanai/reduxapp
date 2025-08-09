import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCartValue } from '../features/Shop';

const ProductModal = ({ productt, onClose }) => {
    const dispatch = useDispatch();
    const { model, price, image } = productt;
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const totalPrice = price * quantity;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 transition-opacity duration-300">
            <div className="bg-white mt-12 p-6 rounded-2xl w-11/12 max-w-3xl relative flex flex-col md:flex-row gap-6 shadow-lg transform scale-100 transition-transform duration-300">
                {/* Close Button */}
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl font-bold transition-transform transform hover:scale-110"
                >
                    ×
                </button>

                {/* Product Image */}
                <div className="w-full md:w-2/5 flex items-center justify-center">
                    <img 
                        src={`http://localhost:3001/images/${image}`} 
                        alt="Product" 
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                </div>

                {/* Product Content */}
                <div className="w-full md:w-3/5 text-left flex flex-col justify-between">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">{model}</h2>

                    {/* Dynamic Total Price */}
                    <div className="mb-6">
                        <span className="text-green-600 font-bold text-2xl">{totalPrice.toFixed(2)} TND</span>
                    </div>

                    {/* Quantity Selector */}
                    <div className="mb-6 flex items-center space-x-4">
                        <h3 className="font-semibold text-lg text-gray-700">Quantity:</h3>
                        <div className="flex items-center border border-gray-300 rounded-lg shadow-sm">
                            <button 
                                onClick={decreaseQuantity} 
                                className="px-4 py-2 text-lg font-bold bg-gray-200 hover:bg-gray-300 rounded-l-lg transition-colors"
                            >
                                −
                            </button>
                            <span className="px-6 text-lg font-medium">{quantity}</span>
                            <button 
                                onClick={increaseQuantity} 
                                className="px-4 py-2 text-lg font-bold bg-gray-200 hover:bg-gray-300 rounded-r-lg transition-colors"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button 
                        onClick={() => {
                            const productData = { ...productt, quantity, totalPrice };
                            dispatch(setCartValue(productData));
                            onClose();
                        }}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors shadow-md"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
