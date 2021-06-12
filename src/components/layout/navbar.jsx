import React from 'react'
import './navbar.scss'
import SignedInLinks from './signedInLinks'
// import SignedOutLinks from './signedOutLinks'

class Navbar extends React.Component{
    
    render(){
        return <div className='nav-scaffold'>
            <div className='nav-container'>
                <div className="logo">Logo</div>
                <div className="nav-links">
                    <SignedInLinks/>
                    {/* <SignedOutLinks/> */}
                </div>
            </div>
        </div>
    }
}

export default Navbar