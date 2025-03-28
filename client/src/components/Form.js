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
        <div className="mx-auto flex flex-row p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-10">
            <div className=' mx-auto flex flex-col items-center justify-center h-full'>
                <img src={myImage} alt="My SVG Image" className="h-96 py-4 w-2/3" />
            </div>

            <div className='w-2/4 mx-auto'>     
                <h2 className="text-2xl font-bold text-emerald-700 dark:text-gray-100 text-center">Sell a product</h2>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 text-center mt-4">
            We’d love to hear from you! Feel free to reach out to us using the form below or contact us directly at:
                </p>
                <form onSubmit={addProduct}>
                    <div className="grid px-8 gap-6 mb-6 lg:grid-cols-2 mt-4">
                        <div>
                            <label htmlFor="model" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Model</label>
                            <input 
                                type="text" 
                                id="model" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Model" 
                                ref={model}
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                            <input 
                                type="text" 
                                id="description" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Description" 
                                ref={description}
                                required 
                            />
                        </div>
                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label htmlFor="brands" value="Select brand" />
                            </div>
                            <Select id="brands" onChange={e => setBrand(e.target.value)} required>
                                <option>Apple</option>
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
                            <Select id="category" onChange={e => setCategory(e.target.value)} required>
                                <option>iPhone</option>
                                <option>Smartphone</option>
                                <option>Tablet</option>
                                <option>PC</option>
                            </Select>
                        </div>
                    </div>
                    <div className="max-w-md px-8 pb-6">
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                        <div className="flex flex-row">
                            <span className="flex items-center bg-grey-lighter rounded rounded-r-none px-3 text-sm font-medium text-gray-900">TND</span>
                            <input 
                                type="number" 
                                name="price"
                                placeholder='****' 
                                className="bg-gray-50 text-grey-darker font-normal rounded text-grey-darkest border border-red rounded-l-none font-bold"
                                min="0"
                                onChange={e => setPrice(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='px-8 w-full md:w-3/4'>
                        <div className="mb-2 block">
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
                <p className="mt-5">These input field components is a way to add the product you want to sell</p>
            </div>
        </div>

    );
};
 
export default Form;