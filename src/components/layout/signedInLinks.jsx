import React from 'react'
import './navbar.scss'
import './signedInLinks.scss'
import { NavLink } from 'react-router-dom'

class SignedInLinks extends React.Component{
    
    render(){
        return <div className='signed-in-scaffold navlinks'>
            {/* <div className='neulink navtext'><NavLink to='/'>New Project</NavLink></div> */}
            <div className='neulink navtext'><NavLink to='/'>Log Out</NavLink></div>
            <div id='avatar'></div>
        </div>
    }
}

export default SignedInLinks
