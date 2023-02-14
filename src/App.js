import { useEffect, useState } from 'react';
import './App.css';
import { InputsList } from './components/InputsList';
import { Charts } from './components/Charts';
import { ProvidersList } from './components/ProvidersList';

import { useDispatch, useSelector } from 'react-redux';
import { onRangeStorage, onRangeTransfer } from './redux/slice';



function App() {
    const rangeList = ['Storage', 'Transfer'];
    const data = [
        {
            name: 'backblaze',
            switch: false,
            minPayment: 7,
            storagePrice: 0.005,
            transferPrice: 0.01,
            logo: './img/backblaze.webp',
            price: 0,
        },
        {
            name: 'bunny',
            switch: true,
            maxPayment: 10,
            storagePriceHDD: 0.01,
            storagePriceSSD: 0.02,
            transferPrice: 0.01,
            logo: './img/bunny.svg',
            price: 0,
        },
        {
            name: 'scaleway',
            switch: true,
            maxPayment: 10,
            storagePriceMulti: 0.06, //75GB 0
            storagePriceSingle: 0.03, //75GB 0
            transferPrice: 0.02, //75GB 0
            logo: './img/scaleway.svg',
            price: 0,
        },
        {
            name: 'vultr',
            switch: false,
            minPayment: 5,
            storagePrice: 0.01,
            transferPrice: 0.01,
            logo: './img/vultr.svg',
            price: 0,
        },
    ];
    const [bunnyHDD, setBunnyHDD] = useState(true);
  const [scalewayMulti, setScalewayMulti] = useState(true);
  
    const sVal = useSelector(state => state.range.sVal);
  const tVal = useSelector(state => state.range.tVal);
  
    const dispatch = useDispatch();

    //записываем в стейт данные бегунка
    const onRangeChange = e => {
        if (e.target.name === 'Storage') {
            dispatch(onRangeStorage(e.target.value));
        } else if (e.target.name === 'Transfer') {
            dispatch(onRangeTransfer(e.target.value));
        }
    };
    const modeSwitch = e => {
        if (e.target.name === 'bunny') {
            setBunnyHDD(e.target.value === 'HDD' ? true : false);
        } else {
            setScalewayMulti(e.target.value === 'Multi' ? true : false);
        }
    };

    const pricesCalc = () => {
        let prices = [];
        let elPrice = 0;
        data.forEach(el => {
            if (el.name === 'backblaze') {
                const price = sVal * el.storagePrice + tVal * el.transferPrice;

                elPrice = price < 7 && price !== 0 ? 7 : price;
            } else if (el.name === 'bunny') {
                const priceHDD = sVal * el.storagePriceHDD + tVal * el.transferPrice; //HDD
                const priceSSD = sVal * el.storagePriceSSD + tVal * el.transferPrice; //SSD

                const maxPaymentHDD = priceHDD > el.maxPayment ? el.maxPayment : priceHDD;
                const maxPaymentSSD = priceSSD > el.maxPayment ? el.maxPayment : priceSSD;

                elPrice = bunnyHDD ? maxPaymentHDD : maxPaymentSSD;
            } else if (el.name === 'scaleway') {
                const sPrice = sVal < 75 ? 0 : sVal - 75;
                const tPrice = tVal < 75 ? 0 : tVal - 75;

                const priceMulti = sPrice * el.storagePriceMulti + tPrice * el.transferPrice; //Multi
                const priceSingle = sPrice * el.storagePriceSingle + tPrice * el.transferPrice; //Single

                elPrice = scalewayMulti ? priceMulti : priceSingle;
            } else if (el.name === 'vultr') {
                const price = sVal * el.storagePrice + tVal * el.transferPrice;
                elPrice = price < 5 && price !== 0 ? 5 : price;
            }
            const newEl = { name: el.name, price: elPrice };
            prices.push(newEl);
        });

        return prices;
    };

    useEffect(() => {
        pricesCalc();
    }, [sVal, tVal]);

    const rendData = pricesCalc();

    return (
        <div className="App">
            <InputsList list={rangeList} onRangeChange={onRangeChange} />
            <Charts data={rendData} />
            <ProvidersList data={data} modeSwitch={modeSwitch} />
        </div>
    );
}

export default App;