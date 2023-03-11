import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='bg-color'>
            <nav className='nav-bar container py-2'>
            <Link to='/' className='fw-bold fs-3  text-light text-decoration-none'><span className='fs-4'>Learn</span>Zone</Link>
          <ul className='d-flex justify-content-center align-items-center m-0'>
            <NavLink className='text-light text-decoration-none fw-bold fs-5 px-3' to="/">Home</NavLink>
            <NavLink className='text-light text-decoration-none fw-bold fs-5 px-3' to="/static">Statics</NavLink>
            <NavLink className='text-light text-decoration-none fw-bold fs-5 px-3' to="/blog">Blog</NavLink>
          </ul>
        </nav>
        </div>
    );
};

export default NavBar;