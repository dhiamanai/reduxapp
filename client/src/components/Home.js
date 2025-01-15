import React, { useEffect } from 'react';
import { Spinner } from 'flowbite-react';
import Cards from './Cards';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../features/ProductSlice';
import HeroSection from './HeroSection';


const Home = () => {

    const dispatch = useDispatch();
    const { value, loading } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProducts()); 
    }, [dispatch]);

    return ( 
        <div>

            <HeroSection />
            {loading === false ? (
                value.length > 0 ? (
                    <div>
                        <Cards loading={loading} />
                    </div>
                ) : (
                    <h1>Sorry, no products available!</h1>
                )
            ) : (
                <div className="flex justify-center py-4 text-center">
                    <Spinner aria-label="Center-aligned spinner example" size="xl" />
                </div>
            )}
        </div>
    );
};
 
export default Home;