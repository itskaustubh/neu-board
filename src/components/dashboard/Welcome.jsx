import React, { Component } from 'react'
import AdminAuth from './AdminAuth'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import {updateAuth} from '../../store/actions/authActions'
import { NavLink } from 'react-router-dom'
import './Welcome.scss'

export class Welcome extends Component {
    constructor(props){
        super(props)
        this.state = {
          showAuthInput : false
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
        const {showAuthInput} = this.state
        return (
                <div className="dashboard-welcome-scaffold no-select">
                  <div className="dashboard-welcome">
                    <p id='text-welcome'>welcome to neuboard!</p>
                    <p id='text-whatisthis'>Post a message, meme or a random thought.</p>
                    <p id='text-madewith'>Made with 💜 using React and Firebase</p> 
                    <NavLink to='/dashboard'>
                      <div id='goto-dashboard' className="neu-button">Go to Dashboard</div>
                    </NavLink>
                    <AdminAuth isVisible={showAuthInput} onAuthenticated={this.handleAuthSuccess}/>
                  </div>
                  <div className="admin-login-container">
                    {
                    this.props.isAuth ? <div className="admin-login-text neulink" onClick={this.handleLogOut}>Logout</div> : 
                        <div className="admin-login-text neulink" onClick={this.toggleAuthInput}>Admin Login</div>
                    }
                  </div>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
  const isAuth     = state.auth.isAuth
  return {
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
)(Welcome);
