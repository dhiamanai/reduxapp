import React from 'react';
import Navbaar from './components/Navbaar';
import Footerr from './components/Footer';
import Home from './components/Home';
import Form from './components/Form';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
    return (
        <Router>
            <div>
                <Navbaar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sell" element={<Form />} />

                </Routes>
                <Footerr />
            </div>
        </Router>
    );
}

export default App;
