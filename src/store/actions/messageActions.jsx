export const uploadMessage = (messagePayload) => {
    return (dispatch, getState,{ getFirebase,getFirestore }) => {
        // some async code
        const firestore = getFirestore()
        firestore.collection('messages').add({
            ...messagePayload
        }).then(() => {
            dispatch({ type : "UPLOAD_MESSAGE", messagePayload })
        }).catch((err) => {
            dispatch({ type : "UPLOAD_MESSAGE_ERROR", err })
        })
    }
}
