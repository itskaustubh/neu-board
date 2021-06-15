export const uploadMessage = (messagePayload) => {
    return (dispatch, getState,{ getFirebase }) => {

        const firestore = getFirebase().firestore();
        firestore.collection('messages').add({
            ...messagePayload
        }).then(() => {
            dispatch({ type : "UPLOAD_MESSAGE", messagePayload })
        }).catch((err) => {
            dispatch({ type : "UPLOAD_MESSAGE_ERROR", err })
        })
    }
}
