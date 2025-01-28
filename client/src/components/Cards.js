import React, { useState } from 'react';
import { updateProduct, deleteProduct } from '../features/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Card ,Button} from 'flowbite-react';
import { setCartValue } from '../features/Shop';



const Cards = () => {
    
    const dispatch = useDispatch();
    const { value } = useSelector((state) => state.products);

    const [updtitle, setUptitle] = useState(null);
    const [updDescription, setDescription] = useState(null);
    const [updBrand, setBrand] = useState(null);
    
    const uProduct = (id) => {
        const data = {
            id,
            title: updtitle,
            description: updDescription,
            brand: updBrand
        };
        console.log('data ',data);
        dispatch( updateProduct(data)).then(() => window.location.reload(false));
    };
    
    const delProduct = (id) => {
        dispatch( deleteProduct(id)).then(() => window.location.reload(false));  
    };

    return (
            
        <div id="Data" className="bg-slate-200 min-w-full lg:max-w-7xl lg:px-8 dark:bg-slate-800 py-10">
            <p className="text-center text-3xl font-semibold text-gray-900 dark:text-white mb-8">Products</p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
                {value.map((product) => (
                  
                    <Card key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg ">
                        <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                            <img
                                src={`http://localhost:3001/images/${product.image}`}
                                alt={product.model}
                                className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
                            />
                        </div>
                        <div className="p-4 space-y-2">
                            <h5 className="text-lg font-semibold text-gray-900 dark:text-white truncate">{product.model}</h5>
                            <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">{product.price} DT</span>
                            <Button
                                className="bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-4 focus:ring-emerald-300
                                     dark:focus:ring-emerald-900 w-full py-2 rounded-md flex items-center justify-center space-x-2 text-sm"
                                onClick={() => dispatch(setCartValue(product))}  >
                          
                                Add to Cart
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    
    



    // loading == false && value.map(element => {

    //     return <div className='frame bg-red-400' key={element.id}>
    //         <h4>{element.id}</h4>
    //         <h4>{element.title}</h4>
    //         <h4>{element.brand}</h4>
    //         <h4>{element.description}</h4>
    //         { 
    //             <img src={`http://localhost:3001/images/${element.image}`} alt={element.id} style={{ width: '150px', height: '100px'}}/>
                 
    //         }
    // <h4>
    // <details>
    //     <summary> update</summary>
    //     <input 
    //         type='text'
    //         placeholder={element.title}
    //         onChange={(e) => { setUptitle(e.target.value); }}
    //     ></input>
    //     <input 
    //         type='text'
    //         placeholder={element.description}
    //         onChange={(e) => { setDescription(e.target.value); }}
    //     ></input>
    //     <input 
    //         type='text'
    //         placeholder={element.brand}
    //         onChange={(e) => { setBrand(e.target.value); }}
    //     ></input>
                      
    //     <button
    //         onClick={() => { uProduct(element.id, updtitle, updDescription, updBrand); }}
    //     >
    // update
    //     </button>
    //     <button
    //         onClick={() => { delProduct(element.id); }}
    //     >
    // delete
    //     </button>
    // </details>
    // </h4>
    //     </div>; 
    // }
    // )
    );
};

export default Cards;
