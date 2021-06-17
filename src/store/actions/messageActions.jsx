import {toast} from 'react-toastify'

export const uploadMessage = (messagePayload) => {
    return (dispatch, getState,{ getFirebase }) => {

        const firestore = getFirebase().firestore();
        firestore.collection('messages').add({
            ...messagePayload
        }).then((response) => {
            console.log(response.id)
            toast.success('Message sent!')
            dispatch({ type : "UPLOAD_MESSAGE", messagePayload })
        }).catch((err) => {
            dispatch({ type : "UPLOAD_MESSAGE_ERROR", err })
            toast.error(`Couldn't send message! Retry like an hour later.`)
        })
    }
}
