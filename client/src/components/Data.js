import React, { useState } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import { updateProduct, deleteProduct } from '../features/ProductSlice';
import { useDispatch } from 'react-redux';

const Data = ({ loading, value }) => {
    
    const dispatch = useDispatch();
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
        loading == false && value.map(element => {

            return <div className='frame' key={element.id}>
                <h4>{element.id}</h4>
                <h4>{element.title}</h4>
                <h4>{element.brand}</h4>
                <h4>{element.description}</h4>
                { 
                    element.images?.length > 1 && 
        <center>
            <SimpleImageSlider
                width={400}
                height={200}
                images={element.images}
                showBullets={true}
                showNavs={true}
                navSize={40}
            />
        </center>
                }
                <h4>
                    <details>
                        <summary> update</summary>
                        <input 
                            type='text'
                            placeholder={element.title}
                            onChange={(e) => { setUptitle(e.target.value); }}
                        ></input>
                        <input 
                            type='text'
                            placeholder={element.description}
                            onChange={(e) => { setDescription(e.target.value); }}
                        ></input>
                        <input 
                            type='text'
                            placeholder={element.brand}
                            onChange={(e) => { setBrand(e.target.value); }}
                        ></input>
                        <button
                            onClick={() => { uProduct(element.id, updtitle, updDescription, updBrand); }}
                        >
                    update
                        </button>
                        <button
                            onClick={() => { delProduct(element.id); }}
                        >
                    delete
                        </button>
                    </details>
                </h4>
            </div>; 
        }
        )
    );
};

export default Data;
