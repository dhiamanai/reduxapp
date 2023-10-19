import './App.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from './features/ProductSlice';
import Navbar from './components/Navbar';
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
            <Navbar/>
            <Form />
            {
                loading == false ? 
                    value.length > 0 ? 
                        <Data 
                            loading={loading}
                            value={value}
                        /> 
                        : <h1>No products available !</h1> 
                    : <h1>loading...</h1> 
            }
        </div>
    );
}

export default App;
