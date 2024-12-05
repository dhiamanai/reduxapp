import React, { useState } from 'react';
import { updateProduct, deleteProduct } from '../features/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Card ,Button} from 'flowbite-react';
import ReactReadMoreReadLess from 'react-read-more-read-less';



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
            
        <div id="Data" className="bg-slate-200 p-4 min-w-full sm:py-8 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {value.map((product) => (
                    <a key={product.id} href={product.href} className="group">
                        <Card
                            className='max-w-sm h-[30rem] w-80' // Remplace h-96 par une hauteur personnalisée
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                        >
                            <img
                                src={`http://localhost:3001/images/${product.image}`}
                                alt="Meaningful alt text"
                                className="h-1/2 w-full object-cover"
                            />
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {product.model}
                            </h5>

                            <ReactReadMoreReadLess
                                className="font-normal text-gray-700 dark:text-gray-400"
                                charLimit={25}
                                readMoreText={'Read more..'}
                                readLessText={'Read less '}
                            >
                               
                                {product.details}
                               
                            </ReactReadMoreReadLess>
                          
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price} DT</span>

                            <Button outline gradientDuoTone="greenToBlue">
                                     Update 
                                <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Button>
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
