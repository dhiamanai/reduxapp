import axios from 'axios';
import React, { useRef,useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { insertProducts } from '../features/ProductSlice';
// Import the Cloudinary classes. 
// import {fill} from '@cloudinary/url-gen/actions/resize';
// import {CloudinaryImage} from '@cloudinary/url-gen';
// import { AdvancedImage } from '@cloudinary/react';
import cloudinary from 'cloudinary-core';

//"https://res.cloudinary.com/dzxre6g29/image/upload/v1685402104/bda5ywaw0cubvor3hqiz.png"

//https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/list
const Form = () => {
    const dispatch = useDispatch();

    // const cloudinaryConfig = {
    //     cloudName: 'dzxre6g29',
    //     apiKey: '289354254314119',
    //     apiSecret: 'Y3JlXtorWFIlMbz2r_JA_-W4Gb8'
    // };

    // const [resourCes, setResources] = useState([]);

    // const myImage = new CloudinaryImage('dwvnmbeydxm9mnw0ruyb', {cloudName: 'dzxre6g29'}).resize(fill().width(100).height(150));

    const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'dzxre6g29' });
    const imageUrl = cloudinaryCore.url('dwvnmbeydxm9mnw0ruyb', { width: 300, height: 200, crop: 'fill' });


    const containerRef = useRef(null);

    useEffect(() => {

        if(window && containerRef.current){
            window.cloudinary
                .galleryWidget({
                    container: containerRef.current,
                    cloudName: 'dzxre6g29',
                    mediaAssets: [{ tag: 'gallery' }],
                })
                .render();
        }



        // const fetchResources = async () => {

        //     try {
                               
        //         const response = await axios.get(
        //             `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/resources`,
        //             {
        //                 headers: {
        //                     'Content-Type': 'application/json',
                          
                            
        //                 },
        //             }
        //         );

        //         if (response.data.resources) {
        //             setResources(response.data.resources);
        //         } 
        //     } catch (error) {
        //         console.error('Error:', error);
        //     }
        // };
        // fetchResources();
    }, []);

    const title = useRef(null);
    const description = useRef(null);
    const [image, setImageSrc] = useState(null);

    const addProduct = () => {
        const productData = {
            title: title.current.value,
            description: description.current.value,
            images: [image]
        };  
        dispatch( insertProducts(productData))
            .unwrap()
            .then((originalPromiseResult) => {
                console.log(originalPromiseResult);
            })
            .catch((rejectedValueOrSerializedError) => {
                console.log(rejectedValueOrSerializedError);
            }); 
        title.current.value = null;
        description.current.value = null;  
    };

    const handleFileUpload = () => {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'ufgulk1n');

        axios.post('https://api.cloudinary.com/v1_1/dzxre6g29/image/upload', formData)
            .then((response) => {
                console.log('response', response);
                setImageSrc(response.data.secure_url);  
            })
            .catch(err => console.log('error', err));
    };

    return (  
        <div className='Add-user' >
            {/* <AdvancedImage cldImg={myImage} /> */}
            <input 
                type='text' 
                placeholder='title...' 
                ref={title}>
            </input>
            <input 
                type='text' 
                placeholder='description...' 
                ref={description}>
            </input>
            <button 
                onClick={addProduct}>
                        Add product
            </button>
            <br/>
            <input 
                type='file' 
                onChange={(event) => setImageSrc(event.target.files[0]) } >
            </input>
           
            <br/>
            <button 
                onClick={handleFileUpload}>
                        upload
            </button>

            <br/>

            <img src={imageUrl} alt="Your Image" />


            <div ref={containerRef} style={{ width: '400px', margin: 'auto'}} />
           
            {/* {resourCes.map((resource) => (
                <Image
                    key={resource.public_id}
                    cloudName={cloudinaryConfig.cloudName}
                    publicId={resource.public_id}
                    width="300"
                    crop="scale"
                />
            ))} */}
        </div>

    );
};
 
export default Form;