import React, { Component } from 'react'
import './UserInfo.scss'

export class UserInfo extends Component {
    render() {
        return (
            <div className='name-message-scaffold'>
                <div className="name-message-container">
                    <label onClick={this.wewoo} htmlFor='input-name'> <p>Name</p></label>
                    <input type="text" id='input-name' className="form-input" ></input>
                    <label htmlFor='input-message'><p>Message</p></label>
                    <textarea id='input-message' className="form-input" ></textarea>
                </div>
            </div>
        )
    }
}

export default UserInfo
