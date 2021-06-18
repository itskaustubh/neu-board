import React from 'react'
import Post from './post'
import './dashboard.scss'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import {toast} from 'react-toastify'
import AdminAuth from './AdminAuth'
import {updateAuth} from '../..//store/actions/authActions'


var dateNow = Date.now()

const isNewMsg = (message) => {
  if(message.date > dateNow && localStorage.getItem('username') !== message.user ){
    console.log('NEW POST')
    console.log(message)
    toast.info(`New message from ${message.user}!`,{autoClose : 6000})
    dateNow = Date.now()
  }
}



class Dashboard extends React.Component {
        constructor(props){
          super(props)
          this.state = {
            showAuthInput : false
          }
        }

        componentDidUpdate() {
          const messages = this.props.messages
          if(messages && messages.length > 0){
            isNewMsg(messages[0])
          }
        }

        toggleAuthInput = () => {
          this.setState({showAuthInput : !(this.state.showAuthInput)})
        }

        handleAuthSuccess = () => {
          this.setState({showAuthInput : false})
          this.props.updateAuthAction({isAuth : true})
        } 

        handleLogOut = () => {
          this.props.updateAuthAction({isAuth : false})
        }

        render() {
          // console.log(this.props)
          const messages = this.props.messages
          const isAuth = this.props.isAuth
          const {showAuthInput} = this.state
          return (
            <div className='dashboard-scaffold'>
              <div className='dashboard-posts hide-scrollbar'>
                  <div className="dashboard">
                      { messages && messages.map((message,index) => (
                          <Post key={message.id} message={message} isAuth={isAuth}/>
                      ))}
                  </div>
              </div>
              <div className="dashboard-welcome-scaffold no-select">
                <div className="dashboard-welcome">
                  <p id='text-welcome'>welcome to neuboard!</p>
                  <p id='text-whatisthis'>Post a message, meme or a random thought.</p>
                  <p id='text-madewith'>Made with 💜 using React and Firebase</p> 
                  <AdminAuth isVisible={showAuthInput} onAuthenticated={this.handleAuthSuccess}/>
                </div>
              </div>
              {
                isAuth ? <div className="admin-login-text neulink" onClick={this.handleLogOut}>Logout</div> : 
                  <div className="admin-login-text neulink" onClick={this.toggleAuthInput}>Admin Login</div>
              }
  
            </div>
            
          );
        }
}

const mapStateToProps = (state) => {
    // console.log(state)
    // console.log(state.firestore);
    const messages = state.firestore.ordered.messages;
    const isAuth     = state.auth.isAuth
    // console.log(messages)
    return {
      messages,
      isAuth
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
      updateAuthAction : (newAuthState) => dispatch(updateAuth(newAuthState))
  }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect(() => [{collection: 'messages',orderBy : ["date", "desc"] }])
  )(Dashboard);
