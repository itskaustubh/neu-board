import messagesReducer from './messagesReducer'
import avatarReducer from './avatarReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    messages : messagesReducer,
    avatar   : avatarReducer 
})

export default rootReducer
