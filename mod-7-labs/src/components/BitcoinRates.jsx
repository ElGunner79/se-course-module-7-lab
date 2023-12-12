//LAB 1

// import React, { useState, useEffect } from 'react';

// const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

// function BitcoinRates() {
//     const [currency, setCurrency] = useState(currencies[0]);
//     const [exchangeRate, setExchangeRate] = useState(0);

//     const handleCurrencyChange = (e) => {
//         setCurrency(e.target.value);
//     };

//     const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);

//     useEffect(() => {
//         let didCancel = false;

//         const fetchExchangeRate = async () => {
//             try {
//                 const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
//                 const data = await response.json();
//                 const rate = data.bitcoin[currency.toLowerCase()];

//                 if (!didCancel) {
//                     setExchangeRate(rate);
//                 }
//             } catch (error) {
//                 console.error('An error occurred:', error);
//             }
//         };

//         fetchExchangeRate();

//         return () => {
//             didCancel = true;
//         };
//     }, [currency]);

//     return (
//         <div className="BitcoinRates componentBox">
//             <h3>Bitcoin Exchange Rate</h3>
//             <label>Choose currency:
//                 <select value={currency} onChange={handleCurrencyChange}>
//                     {options}
//                 </select>
//             </label>
//             {exchangeRate && <p>1 BTC = {exchangeRate} {currency}</p>}
//         </div>
//     )
// }

// export default BitcoinRates;

//LAB 2.1

// import React, { useState } from 'react';

// import useBitcoinRates from '../hooks/useBitcoinRates';

// const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

// function BitcoinRates() {
//     const [currency, setCurrency] = useState(currencies[0]);
//     const { exchangeRate } = useBitcoinRates(currency);
//     const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);
//     return (
//         <div className="BitcoinRates componentBox">
//             <h3>Bitcoin Exchange Rate</h3>
//             <label>Choose currency:
//                 <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
//                     {options}
//                 </select>
//             </label>
//             {exchangeRate && <p>1 BTC = {exchangeRate} {currency}</p>}
//         </div>
//     )
// }
// export default BitcoinRates;

//LAB 2.2
import React, { useReducer } from 'react';

import useBitcoinRates from '../hooks/useBitcoinRates';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

// Defined the reducer function
function currencyReducer(state, action) {
    switch (action.type) {
        case 'SET_CURRENCY':
            return {
                ...state,
                currency: action.payload,
            };
        default:
            return state;
    }
}

function BitcoinRates() {
    const [state, dispatch] = useReducer(currencyReducer, { currency: currencies[0] });
    const { currency } = state;
    const { exchangeRate } = useBitcoinRates(currency);

    const options = currencies.map(curr => (
        <option value={curr} key={curr}>
            {curr}
        </option>
    ));

    const handleCurrencyChange = (e) => {
        dispatch({ type: 'SET_CURRENCY', payload: e.target.value });
    };

    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>
                Choose currency:
                <select value={currency} onChange={handleCurrencyChange}>
                    {options}
                </select>
            </label>
            {exchangeRate && <p>1 BTC = {exchangeRate} {currency}</p>}
        </div>
    );
}

export default BitcoinRates;