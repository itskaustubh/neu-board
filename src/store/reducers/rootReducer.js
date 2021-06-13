import messagesReducer from './messagesReducer'
import avatarReducer from './avatarReducer'
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    messages : messagesReducer,
    avatar   : avatarReducer,
    firebase: firebaseReducer,
})

export default rootReducer


