import {combineReducers} from "redux";
import {firebaseReducer} from "react-redux-firebase";
import {firestoreReducer} from "redux-firestore";
import messagesReducer from './messagesReducer'
import avatarReducer from './avatarReducer'
import authReducer from './authReducer'


const rootReducer = combineReducers({
    messages : messagesReducer,
    avatar   : avatarReducer,
    auth : authReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer