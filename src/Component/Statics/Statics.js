import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statics = () => {
    const {total}=useLoaderData();
    
    return (
        <div>
            <h2>This is static component</h2>
        </div>
    );
};

export default Statics;