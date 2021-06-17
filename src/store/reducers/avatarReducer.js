// const initState = {
//             sex: 'man',faceColor : '#F9C9B6',earSize : 'small',hairColor : 'lemonchiffon',hairStyle : 'thick',eyeStyle : 'smile',
//                 glassesStyle : 'round',noseStyle : 'short',mouthStyle : 'smile',shirtStyle : 'hoody',shirtColor : 'turquoise',
// } 

const avatarReducer = (state = {isPlaceholder : true, hairColorRandom:true},action) => {
    switch(action.type){
        case 'UPDATE_AVATAR' : 
            console.log('update avatar' , {...state, ...action.avatarStyle })
            return {...state, ...action.avatarStyle }
        default: 
            // console.log('uncaught switch case')
    }
    return state
}

export default avatarReducer