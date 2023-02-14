export let data = [
    {
        name: 'backblaze',
        switch: false,
        minPayment: 7,
        storagePrice: 0.005,
        transferPrice: 0.01,
        logo: "./img/backblaze.webp", 
        price: 0,
    },
    {
        name: "bunny",
        switch: true,
        maxPayment: 10,
        storagePriceHDD: 0.01,
        storagePriceSSD: 0.02,
        transferPrice: 0.1,
        logo: "./img/bunny.svg", 
        priceHDD: 0,
        priceSSD: 0,
        price:0,
        
    },
    {
        name: "scaleway",
        switch: true,
        maxPayment: 10,
        storagePriceMulti: 0.06,//75GB 0
        storagePriceSingle: 0.03,//75GB 0
        transferPrice: 0.2,//75GB 0
        logo: "./img/scaleway.svg", 
        priceMulti: 0,
        priceSingle: 0,
        price: 0,
        
    },
    {
        name: "vultr",
        switch: false,
        minPayment: 5,
        storagePrice: 0.01,
        transferPrice: 0.01,
        logo: "./img/vultr.svg", 
        price: 0,
    },
];
