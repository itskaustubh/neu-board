import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {  reduxFirestore , getFirestore, createFirestoreInstance } from 'redux-firestore'
import {  ReactReduxFirebaseProvider , getFirebase } from 'react-redux-firebase'
import firebase from './config/firebase'
import firebaseConfig from './config/firebase'

import createReduxStore from './store/createReduxStore'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirestore,getFirebase })),
    reduxFirestore(firebase, firebaseConfig)
  )
);

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true 

}

const rrfProps = {
  firebase, //from your src/Firebase/Firebase.js
  config:rrfConfig,
  dispatch:store.dispatch,
  createFirestoreInstance
};


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")

)
