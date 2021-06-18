export const updateAuth = (authStatus) => {
    return (dispatch, getState) => {
        dispatch({ type : "UPDATE_AUTH", authStatus })
    }
}
