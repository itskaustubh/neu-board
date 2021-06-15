import React from 'react'
import './navbar.scss'
import './signedInLinks.scss'
import { NavLink } from 'react-router-dom'
import Avatar from 'react-nice-avatar'
import { connect } from 'react-redux'

class SignedInLinks extends React.Component{

    constructor(props){
        super()
    }
    
    render(){

        return <div className='signed-in-scaffold navlinks'>
            {/* <div className='neulink navtext'><NavLink to='/'>New Project</NavLink></div> */}
            <div className='neulink navtext'><NavLink to='/'>Log Out</NavLink></div>
                {!(this.props.avatar.isPlaceholder) ? <Avatar  style={{ width: '50px', height: '50px' }} 
                    {...this.props.avatar} bgColor='transparent'/> : null}
                
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        avatar : state.avatar
    }
}

export default connect(mapStateToProps)(SignedInLinks)