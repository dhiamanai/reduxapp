import React, { useEffect, useMemo, useState } from 'react';
import { Spinner } from 'flowbite-react';
import Cards from './Cards';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../features/ProductSlice';
import HeroSection from './HeroSection';
import Support from './support';
import SearchBar from './SearchBar';


const Home = () => {

    const dispatch = useDispatch();
    const { value, loading } = useSelector((state) => state.products);
    const [query, setQuery] = useState('');

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return value;
        return value.filter((p) =>
            [p.model, p.brand, p.category]
                .filter(Boolean)
                .some((s) => String(s).toLowerCase().includes(q))
        );
    }, [value, query]);

    useEffect(() => {
        dispatch(getProducts()); 
    }, [dispatch]);

    return ( 
        <div>

            <HeroSection />
            <SearchBar value={query} onChange={setQuery} onClear={() => setQuery('')} />
            {loading === false ? (
                filtered.length > 0 ? (
                    <div>
                        <Cards loading={loading} productsOverride={filtered} />
                    </div>
                ) : (
                    <div className="px-4 mx-auto max-w-3xl text-center py-10 text-gray-600 dark:text-gray-400">
                        <h2 className="text-xl font-semibold">No results</h2>
                        <p className="mt-2">Try adjusting your search or clearing the filter.</p>
                    </div>
                )
            ) : (
                <div className="flex justify-center py-4 text-center">
                    <Spinner aria-label="Center-aligned spinner example" size="xl" />
                </div>
            )}
            <Support/>
            
        </div>
    );
};
 
export default Home;