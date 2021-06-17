import React from 'react'
import './navbar.scss'
import './signedInLinks.scss'
import { NavLink, useLocation,Link } from 'react-router-dom'
import Avatar from 'react-nice-avatar'
import { connect } from 'react-redux'
import postIcon from '../../assets/post.svg'


const SignedInLinks = (props) => {

    const location = useLocation();
    // console.log(location.pathname);

        return (
            <div className='signed-in-scaffold navlinks'>
                <div className='neulink navtext'>
                    {/* <img src={postIcon} alt="" /> */}
                    { location.pathname === '/' &&  props.avatar.isPlaceholder? 
                            <NavLink to='/add'><img id='post-message' src={postIcon} alt="" /></NavLink>  
                            : null
                            
                    }
                    {/* { location.pathname === '/add' ? 
                            <NavLink to='/'>Back to Dashboard</NavLink> : null
                    } */}
                </div>
                    {!(props.avatar.isPlaceholder) ? 
                        <NavLink to={location.pathname=== '/' ? '/add' : '/'}>
                            <Avatar className='avatar-link' style={{ width: '50px', height: '50px' }} 
                            {...props.avatar} bgColor='transparent'/>
                        </NavLink>
                                : null}
            </div>
        )
}

const mapStateToProps = (state) => {
    return {
        avatar : state.avatar
    }
}

export default connect(mapStateToProps)(SignedInLinks)