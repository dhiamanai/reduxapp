import React, { useState } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import { updateProduct, deleteProduct } from '../features/ProductSlice';
import { useDispatch } from 'react-redux';

const Data = ({ loading, value }) => {
    
    const dispatch = useDispatch();
    const [updtitle, setUptitle] = useState(null);
    
    const uProduct = (id, updtitle) => {
        const data = {
            id,
            title: updtitle
        };
        console.log('dataID',data);
        dispatch( updateProduct(data));
        setUptitle('');
    };

    
    const delProduct = (id) => {
        dispatch( deleteProduct(id))
            .unwrap()
            .then((originalPromiseResult) => {
                console.log(originalPromiseResult);
            })
            .catch((rejectedValueOrSerializedError) => {
                console.log(rejectedValueOrSerializedError);
            });
    };

    return (
        loading == false && value.map(element => {

            return <div className='frame' key={element.id}>
                <h1>{element.id}</h1>
                <h1>{element.title}</h1>
                <h1>{element.description}</h1>
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
            {element.images}
        </center>
                }
                <h1>
                    <input 
                        type='text'
                        placeholder='update...'
                        onChange={(e) => { setUptitle(e.target.value); }}
                    ></input>
                    <button
                        onClick={() => { uProduct(element.id, updtitle); }}
                    >
                    update
                    </button>
                    <button
                        onClick={() => { delProduct(element.id); }}
                    >
                    delete
                    </button>
                </h1>
            </div>; 
        }
        )
    );
};

export default Data;
