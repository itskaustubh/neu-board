import React from 'react'
import './navbar.scss'
import './signedInLinks.scss'
import { NavLink, useLocation } from 'react-router-dom'
import Avatar from 'react-nice-avatar'
import { connect } from 'react-redux'


const SignedInLinks = (props) => {

    const location = useLocation();
    // console.log(location.pathname);

        return (
            <div className='signed-in-scaffold navlinks'>
                <div className='neulink navtext'>
                    { location.pathname === '/' ? 
                            <NavLink to='/add'>Post A Message!</NavLink> : null
                    }
                    { location.pathname === '/add' ? 
                            <NavLink to='/'>Back to Dashboard</NavLink> : null
                    }
                </div>
                    {!(props.avatar.isPlaceholder) ? <Avatar  style={{ width: '50px', height: '50px' }} 
                        {...props.avatar} bgColor='transparent'/> : null}
            </div>
        )
}

const mapStateToProps = (state) => {
    return {
        avatar : state.avatar
    }
}

export default connect(mapStateToProps)(SignedInLinks)