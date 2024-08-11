import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './features/ProductSlice';
import Form from './components/Form';
import Data from './components/Data';
import Navbaar from './components/Navbaar';
import Footerr from './components/Footer';
import Buton from './components/Buton';


function App() {
    const dispatch = useDispatch();
    const { value, loading } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProducts()); 
    }, [dispatch]);

    return (
        <div>
            <Navbaar/>
            {
                loading == false ? 
                    value.length > 0 ? 
                        <div>
                            <Data 
                                loading={loading}
                            /> 
                        </div>
                        : <h1>sorry §§ No products available !</h1> 
                    : <h1>loading...</h1> 
            }

            <Form />
            <Footerr/>


        </div>
    );
}

export default App;
