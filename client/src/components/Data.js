import React, { useState } from 'react';
import { updateProduct, deleteProduct } from '../features/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Card ,Button} from 'flowbite-react';


const Data = () => {
    
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
       
            
        <div id="Data" className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {value.map((product) => (
                    <a key={product.id} href={product.href} className="group">
                        <Card
                            className='max-w-sm max-h-sm'
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                        >
                            <img
                                src={`http://localhost:3001/images/${product.image}`}
                                alt="Meaningful alt text"
                                className="h-64 w-full object-cover"
                            />
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>

                            <Button>
                                     Update 
                                <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Button>
                        
                            <div>
                                <details>
                                    <summary> update</summary>
                                    <input 
                                        type='text'
                                        placeholder={product.title}
                                        onChange={(e) => { setUptitle(e.target.value); }}
                                    ></input>
                                    <input 
                                        type='text'
                                        placeholder={product.description}
                                        onChange={(e) => { setDescription(e.target.value); }}
                                    ></input>
                                    <input 
                                        type='text'
                                        placeholder={product.brand}
                                        onChange={(e) => { setBrand(e.target.value); }}
                                    ></input>
                      
                                    <button
                                        onClick={() => { uProduct(product.id, updtitle, updDescription, updBrand); }}
                                    >
                                          update
                                    </button>
                                    <button
                                        onClick={() => { delProduct(product.id); }}
                                    >
                                          delete
                                    </button>
                                </details>
                            </div>
                        </Card>
                    </a>
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

export default Data;
