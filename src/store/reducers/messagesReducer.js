const initState = {
    messageList : [
        {user:'Peter Parker', message:"This is a message", timestamp:'Sun May 11 2020'},
        {user:'Bruce Banner', message:"It do be like that sometimes", timestamp:'Sat April 22 2020'}
    ]
} 

const messagesReducer = (state = initState,action) => {
    return state
}

export default messagesReducer