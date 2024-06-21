import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts, insertProducts } from '../features/ProductSlice';

const Form = () => {
    const dispatch = useDispatch();

    const title = useRef(null);
    const description = useRef(null);
    const brand = useRef(null);
    const category = useRef(null);

    useEffect(() => {
        dispatch(getProducts()); 
    }, [dispatch]);

    const addProduct = async () => {
     
        const productData = {
            title: title.current.value,
            description: description.current.value,
            brand : brand.current.value,
            category : category.current.value,
        };  

        console.log('product: ', productData);

        dispatch(insertProducts(productData));

      
        title.current.value = null;
        description.current.value = null; 
        brand.current.value = null; 
        category.current.value = null; 

    };

   
    // const handleFileUpload = async () => {
    //     const formData = new FormData();
    //     formData.append('file', file);
    //     formData.append('fileName', fileName);
    //     try {
    //         await axios.post(
    //             'http://localhost:3001/upload',
    //             formData
    //         ).then(res => console.log(res));
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };


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
             
                </div>
                <button 
                    onClick={addProduct}>
                        Add product
                </button>
               
            
           
                {/* <button 
                    onClick={handleFileUpload}>
                        upload
                </button> */}
           
            </details>

        </div>

    );
};
 
export default Form;