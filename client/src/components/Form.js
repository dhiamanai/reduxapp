import axios from 'axios';
import { Button, FileInput, Label, Modal, TextInput } from 'flowbite-react';
import React, { useRef, useState } from 'react';

const Form = () => {
    const [openModal, setOpenModal] = useState(false);
   
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
        <div className="flex justify-center py-4">
            <Button onClick={() => setOpenModal(true)}> ajouter un produit </Button>
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6 ">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white"> ajouter un produit </h3>
                        <div className='space-y-6'>
                            <TextInput
                                placeholder='brand...' 
                                ref={brand}
                                id="brand"
                                required
                            />
                            <TextInput
                                placeholder='category...' 
                                ref={category}
                                id="category"
                                required
                            />
                            <TextInput
                                placeholder='description...' 
                                ref={description}
                                id="description"
                                required
                            />
                            <TextInput
                                placeholder='title...' 
                                ref={title}
                                id="title"
                                required
                            />
                        </div>
                        
                        <div id="fileUpload" className="max-w-md">
                            <div className="mb-2 block">
                                <Label htmlFor="file" value="Upload file" />
                            </div>
                            <FileInput id="file" onChange={ (e) => setImage(e.target.files[0])} helperText="A profile picture is useful to confirm your are logged into your account" />
                        </div>
                        
                        <div className="w-full">
                            <Button onClick={() => addProduct}> add the product </Button>
                        </div>
                      
                    </div>
                </Modal.Body>
            </Modal>
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