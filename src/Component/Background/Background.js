import React from 'react';
import './Background.css'


const Background = () => {
    return (
        <section className='container'>
            <div className='position-relative mt-3'>
                <img className='img-size' src="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80" alt="" />
            <div className='d-flex align-items-center justify-content-center h-100 w-100 position-absolute top-0 start-0'>
                <div className="overlay position-absolute h-100 w-100 top-0 start-0 bg-dark z-0"></div>
                <div className="position-relative z-1">
                    <h2 className='fw-bold fs-2 text-white'>Connect With Our Expert</h2>
                    <p className=' fs-2 text-white'>Acquire global knowledge and build your professional skills</p>
                </div>
            </div>
            </div>
            
           

        </section>
    );
};

export default Background;