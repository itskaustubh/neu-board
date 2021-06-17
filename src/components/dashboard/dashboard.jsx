import React from 'react'
import Post from './post'
import './dashboard.scss'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import {toast} from 'react-toastify'


var dateNow = Date.now()

const isNewMsg = (message) => {
  if(message.date > dateNow && localStorage.getItem('username') !== message.user ){
    console.log('NEW POST')
    console.log(message)
    toast.info(`New message from ${message.user}!`)
    dateNow = Date.now()
  }
}

const Dashboard = ({messages}) => {
        if(messages && messages.length > 0){
          isNewMsg(messages[0])
        }
        return (
          <div className='dashboard-scaffold'>
            <div className='dashboard-posts hide-scrollbar'>
                <div className="dashboard">
                    { messages && messages.map((message,index) => (
                        <Post key={index} message={message} />
                    ))}
                </div>
            </div>
            <div className="dashboard-welcome no-select">
              <p id='text-welcome'>welcome to neuboard!</p>
              <p id='text-whatisthis'>Post a message, meme or a random thought.</p>
              <p id='text-madewith'>Made with 💜 using React and Firebase</p> 
            </div>
          </div>
          
        );
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
