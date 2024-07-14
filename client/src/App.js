import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './features/ProductSlice';
import Form from './components/Form';
import Data from './components/Data';

function App() {
    const dispatch = useDispatch();
    const { value, loading } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProducts()); 
    }, [dispatch]);

    return (
        <div className="App">
            <h1 className='text-6xl text-red-500'> Hello tailwind css</h1>
            <Form />
            {
                loading == false ? 
                    value.length > 0 ? 
                        <div className='data'>
                            <Data 
                                loading={loading}
                                value={value}
                            /> 
                        </div>
                        : <h1>sorry §§ No products available !</h1> 
                    : <h1>loading...</h1> 
            }

        </div>
    );
}

export default App;
