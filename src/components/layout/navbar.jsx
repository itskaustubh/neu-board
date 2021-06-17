import React from 'react'
import './navbar.scss'
import SignedInLinks from './signedInLinks'
import { NavLink,useLocation } from 'react-router-dom'
const Navbar = () => {
    const location = useLocation();
    // console.log(location.pathname);

    return (
    <div className='nav-scaffold'>
        <div className='nav-container'>
            <div className="logo">
                <NavLink to='/'>
                    <span className='logo-neu'>neu</span> 
                    <span className='logo-board'>board</span> 
                </NavLink>
            </div>
            <div className="nav-links">
                <SignedInLinks/>
            </div>
        </div>
    </div>)
}

export default Navbar