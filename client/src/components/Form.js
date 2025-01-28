import axios from 'axios';
import React, { useRef, useState } from 'react';
import { FileInput, Label, Select } from 'flowbite-react';
import myImage from '../assets/undraw.svg';

const Form = () => {
   
    const model = useRef(null);
    const description = useRef(null);
    const [brand, setBrand] = useState(null);
    const [category, setCategory] = useState(null);
    const [price, setPrice] = useState(null);
    const [image, setImage] = useState(null);

    const addProduct = () => {

        const formData = new FormData();
        formData.append('model', model.current.value);
        formData.append('details', description.current.value);
        formData.append('brand', brand);
        formData.append('category', category);
        formData.append('price', price);
        formData.append('image', image);

        try {
            axios.post('http://localhost:3001/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }).then(res => console.log('Données envoyées au serveur avec succès', res));
     
        } catch (error) {
            console.error('Erreur:', error);
        }
      
        model.current.value = null;
        description.current.value = null; 
    }; 

    return (  
        <div id="Form" className="h-[90vh] flex flex-row"> 
            <div className='w-1/2 p-2 flex flex-col items-center justify-center h-full'>
              
                <img src={myImage} alt="My SVG Image" className="h-96 py-8 w-auto" />
            </div>

            <div className="w-1/2 max-w-2xl mx-auto bg-gray-100 p-4 m-4 " >
                <h2 className="text-2xl font-bold text-emerald-700 dark:text-gray-100 text-center">Sell a product</h2>
                <form onSubmit={addProduct}>
                    <div className="grid px-8 gap-6 mb-6 lg:grid-cols-2 mt-4">
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Model</label>
                            <input 
                                type="text" 
                                id="model" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Model" 
                                ref={model}
                                required />
                        </div>
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">description</label>
                            <input 
                                type="text" 
                                id="description" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="description" 
                                ref={description}
                                required />
                        </div>
                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label htmlFor="brands" value="Select brand" />
                            </div>
                            <Select id="brands" 
                                onChange={e => setBrand(e.target.value)}
                                required>
                                <option >Apple</option>
                                <option selected>Samsung</option>
                                <option>Oppo</option>
                                <option>Redmi</option>
                                <option>Huawei</option>

                            </Select>
                        </div>
                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label htmlFor="category" value="Select category" />
                            </div>
                            <Select id="category" 
                                onChange={e => setCategory(e.target.value)}
                                required>
                                <option>iphone</option>
                                <option>smartphone</option>
                                <option>tablet</option>
                                <option>pc</option>
                            </Select>
                        </div>
                    </div>
                    <div className="max-w-md px-8 pb-6">
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                        <div className="flex flex-row ">
                            <span className="flex items-center bg-grey-lighter rounded rounded-r-none px-3 text-sm font-medium text-gray-900">TND</span>
                            <input 
                                type="number" 
                                name="price"
                                placeholder='****' 
                                className="bg-gray-50 text-grey-darker font-normal rounded text-grey-darkest border border-red rounded-l-none font-bold"
                                min="0"
                                onChange={e => setPrice(e.target.value)}/>
                        </div>
                    </div>
                    <div className='px-8 w-3/4'>
                        <div className="mb-2 block  ">
                            <Label htmlFor="file-upload" value="Upload an image" />
                        </div>
                        <FileInput 
                            type="file"
                            accept="image/*" 
                            id="file-upload" 
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>
            
                    <div className='flex p-8'>
                        <button 
                            type="submit" 
                            className="text-white self-center bg-emerald-500 hover:bg-emerald-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                    Confirm
                        </button>
                    </div>
                </form>
       
                <p className="mt-5">These input field components is a way to add the product you want to sell
                </p>
            </div>
        </div>
       
    // <div>

           
    //     <details>
    //         <summary>Add product:</summary> 
    //         <div className='Add-product' >
    //             <input 
    //                 type='text' 
    //                 placeholder='brand...' 
    //                 ref={brand}>
    //             </input>
    //             <input 
    //                 type='text' 
    //                 placeholder='category...' 
    //                 ref={category}>
    //             </input>
    //             <input 
    //                 type='text' 
    //                 placeholder='description...' 
    //                 ref={description}>
    //             </input>
             
    //             <input 
    //                 type='text' 
    //                 placeholder='title...' 
    //                 ref={title}>
    //             </input>

    //             select an image

    //             <input type="file" onChange={ (e) => setImage(e.target.files[0])} />

    //             <button 
    //                 onClick={addProduct}>
    //                 Add product
    //             </button>
    //         </div>
           
    //     </details>

    // </div>

    );
};
 
export default Form;