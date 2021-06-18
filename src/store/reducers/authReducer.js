const initState = {
    isAuth : false
}

const authReducer = (state = initState,action) => {
    switch(action.type){
        case 'UPDATE_AUTH' : 
            console.log('update auth status' , action.authStatus,state)
            return action.authStatus
        default: 
            // console.log('uncaught switch case')
    }
    return state
}

export default authReducer