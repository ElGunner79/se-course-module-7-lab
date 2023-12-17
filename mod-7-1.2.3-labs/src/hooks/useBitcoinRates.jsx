import { useState, useEffect } from 'react';

const useBitcoinRates = (currency) => {
    const [exchangeRate, setExchangeRate] = useState(0);

    useEffect(() => {
        let didCancel = false;

        const fetchExchangeRate = async () => {
            try {
                const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
                const data = await response.json();
                const rate = data.bitcoin[currency.toLowerCase()];
                if (!didCancel) {
                    setExchangeRate(rate);
                }
            } catch (error) {
                console.error('An error occurred:', error);
            }
        };

        fetchExchangeRate();

        return () => {
            didCancel = true;
        };
    }, [currency]);

    return { exchangeRate };
};

export default useBitcoinRates;