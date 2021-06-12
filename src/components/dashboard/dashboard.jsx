import React from 'react'
import Post from './post'
import './dashboard.scss'
import { connect } from 'react-redux'

class Dashboard extends React.Component{
    render(){
        console.log(this.props)
        const { messages } = this.props 
        return <div className='dashboard-scaffold'>
            <div className="dashboard">
                { messages.map((message,index) => (
                    <Post key={index} user={message.user} avatar={index} message={message.message} timestamp={message.timestamp} />
                ))}
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        messages : state.messages.messageList
    }
}

export default connect(mapStateToProps)(Dashboard)