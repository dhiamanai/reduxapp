import React from 'react';
import Home from './components/Home';
import Form from './components/Form';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './components/Store';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbaar from './components/Navbaar';

function App() {
  
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <div className="flex-grow">
                    <Navbaar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sell" element={<Form />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <Footer />
            </div>

        </Router>
    );
}

export default App;
