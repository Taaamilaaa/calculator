import { useEffect, useState } from 'react';
import { Bar, BarChart, Legend, Tooltip, CartesianGrid, XAxis, YAxis, Cell, ResponsiveContainer } from 'recharts';


export const Charts = ({data}) => {


// console.log(data);
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={730} height={250} data={data} barSize="38">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" minTickGap={0}/>
            <YAxis/>
            {/* <Tooltip /> */}
            {/* <Legend /> */}
            <Bar dataKey="price" fill="#B2B2B4">
                {data.map((el, index) => {
                    return <Cell key={el.name} dataKey={el.name} fill="#B2B2B9"  />;
                })}
            </Bar>
            </BarChart>
        </ResponsiveContainer>
          


        
    );
};
