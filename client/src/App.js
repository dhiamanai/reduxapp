import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './features/ProductSlice';
import Form from './components/Form';
import Data from './components/Data';
import Navbaar from './components/Navbaar';
import Footerr from './components/Footer';
import { Spinner } from 'flowbite-react';
import HeroSection from './components/HeroSection';
import Dashboard from './components/Dashboard';

function App() {
    const dispatch = useDispatch();
    const { value, loading } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProducts()); 
    }, [dispatch]);

    return (
        <div>
            <Navbaar/>
            <HeroSection/>
            {
                loading == false ? 
                    value.length > 0 ? 
                        <div>
                            <Data 
                                loading={loading}
                            /> 
                        </div>
                        : <h1>sorry §§ No products available !</h1> 
                    : <div className="flex justify-center py-4 text-center">
                        <Spinner aria-label="Center-aligned spinner example" size="xl"/>
                    </div>
            }

            <Form />
            <Footerr/>


        </div>
    );
}

export default App;
