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
        const { sex,faceColor,earSize,hairColor,hairStyle,eyeStyle,
            glassesStyle,noseStyle,mouthStyle,shirtStyle,shirtColor} = this.props.avatar
        return <div className='signed-in-scaffold navlinks'>
            {/* <div className='neulink navtext'><NavLink to='/'>New Project</NavLink></div> */}
            <div className='neulink navtext'><NavLink to='/'>Log Out</NavLink></div>
                <Avatar  style={{ width: '50px', height: '50px' }} 
                    sex={sex} faceColor={faceColor} earSize={earSize} hairColor={hairColor} hairStyle={hairStyle} 
                        eyeStyle={eyeStyle} glassesStyle={glassesStyle} noseStyle={noseStyle} mouthStyle={mouthStyle} 
                            shirtStyle={shirtStyle} shirtColor={shirtColor} bgColor='transparent'/>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        avatar : state.avatar.avatarStyle
    }
}

export default connect(mapStateToProps)(SignedInLinks)