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

    const totalPrice = price * quantity; // Prix total en fonction de la quantité

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
            <div className="bg-white mt-12 p-6 rounded-lg w-3/5 max-w-3xl relative flex gap-6">
                {/* Bouton de fermeture */}
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl">
                    ×
                </button>

                {/* Image du produit */}
                <div className="w-2/5 flex items-center">
                    <img src={`http://localhost:3001/images/${image}`} alt="Product" className="w-full h-64 object-cover rounded-lg" />
                </div>

                {/* Contenu du produit */}
                <div className="w-3/5 text-left">
                    <h2 className="text-2xl font-bold mb-2">{model}</h2>

                    {/* Prix total dynamique */}
                    <div className="mb-4">
                        <span className="text-green-600 font-bold text-xl">{totalPrice.toFixed(2)} TND</span>
                    </div>

                    {/* Sélecteur de quantité */}
                    <div className="mb-6 flex items-center space-x-4">
                        <h3 className="font-semibold">Quantity:</h3>
                        <div className="flex items-center border border-gray-300 rounded-lg">
                            <button 
                                onClick={decreaseQuantity} 
                                className="px-3 py-1 text-lg font-bold bg-gray-200 hover:bg-gray-300 rounded-l-lg"
                            >
                                −
                            </button>
                            <span className="px-4 text-lg font-medium">{quantity}</span>
                            <button 
                                onClick={increaseQuantity} 
                                className="px-3 py-1 text-lg font-bold bg-gray-200 hover:bg-gray-300 rounded-r-lg"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Bouton Ajouter au Panier */}
                    <button 
                        onClick={() => {
                            dispatch(setCartValue({ ...productt, quantity, totalPrice }));
                            onClose();
                        }}                      
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
