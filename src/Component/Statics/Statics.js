import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart,Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legendgit } from 'recharts';

const Statics = () => {
    const {total}=useLoaderData();
    
    return (
        <div className='container text-white'>
            <h1 className='my-5'>Rechart</h1>
            <LineChart></LineChart>
        </div>
    );
};

export default Statics;