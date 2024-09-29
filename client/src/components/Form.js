import axios from 'axios';
import React, { useRef, useState } from 'react';
import { FileInput, Label, Select } from 'flowbite-react';


const Form = () => {
   
    const title = useRef(null);
    const description = useRef(null);
    const [brand, setBrand] = useState(null);
    const category = useRef(null);
    const [image, setImage] = useState(null);

    const addProduct = () => {

        const formData = new FormData();
        formData.append('title', title.current.value);
        formData.append('description', description.current.value);
        formData.append('brand', brand);
        formData.append('category', category.current.value);
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
      
        title.current.value = null;
        description.current.value = null; 
        category.current.value = null; 
    };

    return (  
        <div className="max-w-2xl mx-auto bg-white p-16">
            <p className='text-lg text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600'> Add a product </p>
            <form onSubmit={addProduct}>
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">title</label>
                        <input 
                            type="text" 
                            id="title" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="title" 
                            ref={title}
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
                            <option>Apple</option>
                            <option>Samsung</option>
                            <option>Oppo</option>
                            <option>Redmi</option>
                        </Select>
                    </div>
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">category</label>
                        <input 
                            type="text" 
                            id="category" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="category" 
                            ref={category}
                            required />
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="file-upload" value="Upload file" />
                    </div>
                    <FileInput 
                        type="file"
                        id="file-upload" 
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>
            
                <div className='flex p-8'>
                    <button 
                        type="submit" 
                        className="text-white self-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                    Confirm
                    </button>
                </div>
            </form>
    
            <p className="mt-5">These input field components is part of a larger, open-source library of Tailwind CSS components. Learn
            more by going to the official <a className="text-blue-600 hover:underline"
                href="https://flowbite.com/docs/getting-started/introduction/" target="_blank" rel="noreferrer">Flowbite
                Documentation</a>.
            </p>
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