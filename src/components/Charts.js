import { useEffect, useState } from 'react';
import { Bar, BarChart, Legend, Tooltip, CartesianGrid, XAxis, YAxis, Cell, ResponsiveContainer } from 'recharts';


export const Charts = ({data}) => {


// console.log(data);
    return (
            <BarChart width={730} height={250} data={data} barSize="38">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" minTickGap={0}/>
            <YAxis/>
            {/* <Tooltip /> */}
            {/* <Legend /> */}
            <Bar dataKey="price" fill="#8884d8">
                {data.map((el, index) => {
                    return <Cell key={el.name} dataKey={el.name} />;
                })}
            </Bar>
            </BarChart>


        
    );
};
