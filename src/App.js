import './App.css';

import { data } from './data';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onRangeStorage, onRangeTransfer } from './redux/slice';

import useWindowDimensions from './hoock/useWindowDimensions';

import { InputsList } from './components/InputsList';
import { Charts } from './components/Charts';
import { ProvidersList } from './components/ProvidersList';

function App() {
    const rangeList = ['Storage', 'Transfer'];

    const [bunnyHDD, setBunnyHDD] = useState(true);
    const [scalewayMulti, setScalewayMulti] = useState(true);

    const sVal = useSelector(state => state.range.sVal);
    const tVal = useSelector(state => state.range.tVal);

    const dispatch = useDispatch();

    const size = useWindowDimensions();
    const { width } = size;
    const mobile = width <= 500;

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
        let color = '';
        let logo = '';

        data.forEach(el => {
            if (el.name === 'backblaze') {
                const price = sVal * el.storagePrice + tVal * el.transferPrice;

                elPrice = price < 7 && price !== 0 ? 7 : price;
                color = el.color;
                logo = el.logo;
            } else if (el.name === 'bunny') {
                const priceHDD = sVal * el.storagePriceHDD + tVal * el.transferPrice; //HDD
                const priceSSD = sVal * el.storagePriceSSD + tVal * el.transferPrice; //SSD

                const maxPaymentHDD = priceHDD > el.maxPayment ? el.maxPayment : priceHDD;
                const maxPaymentSSD = priceSSD > el.maxPayment ? el.maxPayment : priceSSD;

                elPrice = bunnyHDD ? maxPaymentHDD : maxPaymentSSD;
                color = el.color;
                logo = el.logo;
            } else if (el.name === 'scaleway') {
                const sPrice = sVal < 75 ? 0 : sVal - 75;
                const tPrice = tVal < 75 ? 0 : tVal - 75;

                const priceMulti = sPrice * el.storagePriceMulti + tPrice * el.transferPrice; //Multi
                const priceSingle = sPrice * el.storagePriceSingle + tPrice * el.transferPrice; //Single

                elPrice = scalewayMulti ? priceMulti : priceSingle;
                color = el.color;
                logo = el.logo;
            } else if (el.name === 'vultr') {
                const price = sVal * el.storagePrice + tVal * el.transferPrice;
                elPrice = price < 5 && price !== 0 ? 5 : price;
                color = el.color;
                logo = el.logo;
            }
            const newEl = { name: el.name, price: elPrice, color: color, logo: logo };
            prices.push(newEl);
        });

        return prices;
    };

    useEffect(() => {
        pricesCalc();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sVal, tVal]);

    const colorSercher = el => {
        el.styles.color = el.color;
    };

    const rendData = pricesCalc();

    const barColorChange = () => {
        let arr = [];
        rendData.forEach(element => {
            arr.push(element.price);
        });
        return Math.min(...arr);
    };

    const minPrice = barColorChange();

    return (
        <div className="container">
            <h1>Compare prices of providers</h1>

            <div className="chart-container">
                <Charts data={rendData} className="centered" mobile={mobile} minPrice={minPrice} />
            </div>
            <InputsList list={rangeList} onRangeChange={onRangeChange} />

            <ProvidersList
                data={rendData}
                modeSwitch={modeSwitch}
                colorSercher={colorSercher}
                mobile={mobile}
                minPrice={minPrice}
            />
        </div>
    );
}

export default App;
