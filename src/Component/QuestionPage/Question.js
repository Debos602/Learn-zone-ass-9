import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllQuestion from '../AllQuestion/AllQuestion';

const Question = () => {
    const {questions, name}=useLoaderData().data;
    
    return (
        <div>
            <h2 className='text-white my-3'>Quiz of {name}</h2>
            <div>
            {
                questions.map((Allquestion, index)=><AllQuestion key={Allquestion.id} index={index} Allquestion={Allquestion}></AllQuestion>)
            }
            </div>
        </div>
        
    );
};

export default Question;