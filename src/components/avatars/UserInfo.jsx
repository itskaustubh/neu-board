import React, { Component } from 'react'
import './UserInfo.scss'
import { uploadMessage } from '../../store/actions/messageActions'
import { connect } from 'react-redux'


export class UserInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : '',
            message : ''
        }
    }

    handleInput(type,e){
        // console.log(e.target.value)
        // console.log(type)
        this.setState({[type] : e.target.value})
    }

    handleSubmit = () => {
        console.log(this.state.name, this.state.message)
        this.props.uploadMessageAction({name: this.state.name, message : this.state.message})
    }

    render() {
        return (
            <div className='name-message-scaffold'>
                <div className="name-message-container">
                    <label onClick={this.wewoo} htmlFor='input-name'> <p>Name</p></label>
                    <input type="text" id='input-name' className="form-input" onChange={this.handleInput.bind(this,'name')}></input>
                    <label htmlFor='input-message'><p>Message</p></label>
                    <textarea id='input-message' className="form-input" onChange={this.handleInput.bind(this,'message')}></textarea>
                    <div className='button-container'>
                        <div className='neu-button' onClick={this.handleSubmit}>Submit</div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        uploadMessageAction : (messagePayload) => dispatch(uploadMessage(messagePayload))
    }
}


export default  connect(null, mapDispatchToProps)(UserInfo)
