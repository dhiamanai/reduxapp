import './App.css';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from './features/ProductSlice';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Data from './components/Data';
import axios from 'axios';

// brand,
// category,
// description,
// discountPercentage,
// id,
// images,
// price,
// rating,
// stock,
// thumbnail,
// title,

function App() {
    const dispatch = useDispatch();
    const { value, loading } = useSelector((state) => state.products);
    const [ data, setData ] = useState();

    useEffect(() => {
        dispatch(getProducts()); 
      
        axios.get('http://localhost:3001/')
            .then(res => setData(res.data[0].imgname))
            .catch(err => console.log(err));

    }, [dispatch]);

    useEffect(() => {
        loading == false && console.log('value', value); 

    }, [value]);
  
    return (
        <div className="App">
            <Navbar/>
            <Form />
            {
                data && <img src={'http://localhost:3001/images/'+data} />
            }
            {
                loading == false ? 
                    value.length > 0 ? 
                        <div className='data'>
                            <Data 
                                loading={loading}
                                value={value}
                            /> 
                        </div>
                        : <h1>sorry No products available !</h1> 
                    : <h1>loading...</h1> 
            }
        </div>
    );
}

export default App;
