import React from 'react'
import Post from './post'
import './dashboard.scss'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
// import { withFirestore } from 'react-redux-firebase'

// npm install react-redux@5.1.1 react-redux-firebase@2.1.6 redux-firestore@0.5.7 firebase@5.3.0

const Dashboard = ({messages}) => {
        return (<div className='dashboard-scaffold'>
            <div className="dashboard">
                { messages && messages.map((message,index) => (
                    <Post key={index} user={message.user} avatar={message.avatar} message={message.message} timestamp={message.timestamp} />
                ))}
            </div>
        </div>);
}


const mapStateToProps = (state) => {
    // console.log(state)
    // console.log(state.firestore);
    const messages = state.firestore.ordered.messages;
    // console.log(messages)
    return {
      messages,
    };
  };

export default compose(
    connect(mapStateToProps),
    firestoreConnect(() => [{collection: 'messages',orderBy : ["date", "desc"] }])
  )(Dashboard);
