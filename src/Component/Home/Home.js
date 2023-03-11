import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Background from '../Background/Background';
import Quize from '../Quize/Quize';

const Home = () => {
    const quizes=useLoaderData()?.data;
    // console.log(quizes)
    return (
        <div>
            <Background></Background>
            <div className="container d-flex justify-content-between gap-3 mt-3 shadow p-3 mb-5 bg-body-tertiary rounded">
            
             {quizes?.map(quize=> <Quize key={quize.id} quize={quize}></Quize>)}
          
        </div>
        </div>
    );
};

export default Home;