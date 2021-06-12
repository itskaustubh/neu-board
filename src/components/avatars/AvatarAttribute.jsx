import React from 'react'

const capitalize = (letter) => {
    return letter && letter[0].toUpperCase() + letter.slice(1);
}

const handleClick = (e) => {
    console.log('hehe')
}

function Option(props) {
    const {stateValue, id,name} = props 
    // console.log(stateValue,id)
    return (
            <p id={id} className={`opt ${stateValue === id ? 'active' : ''}`} >{name}</p>
    )
}

function AvatarAttribute(props) {
    return (
        <div>
            <p className="field">{props.title}</p>
                <div className="opts" id={props.id} onClick={props.onClick}>
                    {props.styleOpts.map((style,index) => (
                        <Option key={index} id={style} name={capitalize(style)} stateValue={props.stateValue}/>
                    ))}
            </div>
        </div>
    )
}

export default AvatarAttribute
