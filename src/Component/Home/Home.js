import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Background from '../Background/Background';
import Quize from '../Quize/Quize';

const Home = () => {
    const quizes=useLoaderData()?.data;
    
    return (
        <div>
            <Background></Background>
            <div className="container mt-3 mb-5">
                <div className="row justify-content-between shadow mb-5 gy-3 gy-lg-0">
                {quizes?.map(quize=> <Quize key={quize.id} quize={quize}></Quize>)}
                </div>
            </div>
        </div>
    );
};

export default Home;