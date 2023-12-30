import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../components/Homepage';
import LoginPage from '../components/LoginPage';
import BitcoinRatesPage from '../components/BitcoinRatesPage';

function AppRoutes(props) {
    return (
        <Routes>
            {/* index matches on default/home URL: / */}
            <Route index element={<Homepage {...props} />} />

            <Route path='/login' element={<LoginPage {...props} />} />

            <Route path='/bitcoinrates' element={<BitcoinRatesPage {...props} />} />
            
        </Routes>
    )
}

export default AppRoutes;