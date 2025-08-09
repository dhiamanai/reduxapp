import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card ,Button} from 'flowbite-react';
import { setCartValue } from '../features/Shop';
import ProductModal from './ProductModal';
import { motion } from 'framer-motion';

const Cards = () => {
    
    const dispatch = useDispatch();
    const { value } = useSelector((state) => state.products);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productt, setProduct] = useState(null);

    return (
        <>
            {/* *********************************** */}

            <section className="py-12 bg-white sm:py-16 lg:py-20">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-md mx-auto text-center">
                        <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Our featured items</h2>
                        <p className="mt-3 text-base leading-7 text-gray-600">Curated products crafted with care.</p>
                    </div>

                   
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.06 }
                            }
                        }}
                        className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-6 lg:grid-cols-4"
                    >
                        {value.map((product) => (
                            <motion.div
                                key={product.id}
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                whileHover={{ y: -4 }}
                                className="relative group m-2 p-3 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                                onClick={() => {
                                    setIsModalOpen(true);
                                    setProduct(product);
                                }}
                            >
                                <div className="relative overflow-hidden h-60 bg-gray-50 flex items-center justify-center rounded-xl">
                                    <img
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out transform group-hover:scale-105"
                                        src={`http://localhost:3001/images/${product.image}`}
                                        alt={product.model}
                                    />
                                </div>
                                <div className="flex items-start justify-between mt-4">
                                    <h3 className="text-sm font-medium text-gray-900 truncate">
                                        {product.model}
                                    </h3>
                                    <p className="text-sm font-semibold text-gray-900">{product.price} TND</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                
                </div>
            </section>
            
           
            {isModalOpen && <ProductModal productt={productt} onClose={() => setIsModalOpen(false)} />}


        </>
    


    );
};

export default Cards;
