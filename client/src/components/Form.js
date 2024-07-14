import axios from 'axios';
import React, { useRef, useState } from 'react';

const Form = () => {
   
    const title = useRef(null);
    const description = useRef(null);
    const brand = useRef(null);
    const category = useRef(null);
    const [image, setImage] = useState(null);

    const addProduct = () => {

        const formData = new FormData();
        formData.append('title', title.current.value);
        formData.append('description', description.current.value);
        formData.append('brand', brand.current.value);
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
        brand.current.value = null; 
        category.current.value = null; 
    };

    return (  
        <div className='Add-user' >
            <details>
                <summary>Add product:</summary> 
                <div className='Add-product' >
                    <input 
                        type='text' 
                        placeholder='brand...' 
                        ref={brand}>
                    </input>
                    <input 
                        type='text' 
                        placeholder='category...' 
                        ref={category}>
                    </input>
                    <input 
                        type='text' 
                        placeholder='description...' 
                        ref={description}>
                    </input>
             
                    <input 
                        type='text' 
                        placeholder='title...' 
                        ref={title}>
                    </input>

                    select an image

                    <input type="file" onChange={ (e) => setImage(e.target.files[0])} />

                    <button 
                        onClick={addProduct}>
                        Add product
                    </button>
                </div>
           
            </details>

        </div>

    );
};
 
export default Form;