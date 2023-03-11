import React, { useState } from 'react';
import { FaRegCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './AllQuestion.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye } from 'react-icons/fa';


const AllQuestion = ({Allquestion, index}) => {
    const {question, options, correctAnswer, id} = Allquestion;

    const handleToClick = (answer) => {
        if (answer === correctAnswer) {
            toast.success("Wow Correct Answer!");
        } else {
            toast.error("Wrong Answer!");
        }
    }
    const realAnswer=(real)=>{
        toast.success(real)
    }   

    return (
        <div className='container w-50 margin-auto'>
            <div className="card p-3 my-3">
                <div className='d-flex justify-content-between'>
                    <p className='fw-bold mb-3'>Quiz {index + 1} : {question.replace(/(<([^>]+)>)/gi, "")}</p>
                    <div><FaEye onClick={()=>realAnswer(correctAnswer)} /></div>
                </div>
                <ul className="list-group list-group-flush">
                    {
                        options.map((option, idx) => (
                            <li onClick={() => handleToClick(option)} key={idx} className="list-group-item text-start fw-semibold fs-6 border rounded">
                                <FaRegCircle className="circle mr-4"/> {option}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <ToastContainer className='top-50'/>
        </div>
    );
};

export default AllQuestion;
