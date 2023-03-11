import React from 'react';
import { Outlet } from 'react-router-dom';
import Background from '../Background/Background';
import NavBar from '../NavBar/NavBar';
import './Main.css'

const Main = () => {
    return (
        <div className="body">
            <NavBar></NavBar>
            {/* <Background></Background> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Main;