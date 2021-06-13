import React from 'react'
import Post from './post'
import './dashboard.scss'
import { connect } from 'react-redux'
import { compose } from 'react'
import { firestoreConnect } from 'react-redux-firebase'
// import { withFirestore } from 'react-redux-firebase'


// npm install react-redux@5.1.1 react-redux-firebase@2.1.6 redux-firestore@0.5.7 firebase@5.3.0

class Dashboard extends React.Component{
    render(){
        console.log(this.props)
        // const { messages } = this.props 
        const messages = {}
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
        messages : state.firestore.ordered.messages
    }
}

// export default connect(mapStateToProps)(Dashboard)

export default firestoreConnect(() => ['messages'])
