import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {  reduxFirestore , getFirestore } from 'redux-firestore'
import {  reactReduxFirebase , getFirebase } from 'react-redux-firebase'
import firebaseConfig from './config/firebase'

const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase , getFirestore})),
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig)
  )
);

// https://stackoverflow.com/questions/61647771/react-reactstrap-warning-legacy-context-api-has-been-detected-within-a-strict
ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
