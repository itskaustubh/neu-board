import React from 'react'
import Avatar from 'react-nice-avatar'
import './post.scss'

const Post = (props) => {
    console.log(props.avatar)
    return (
        <div className="post">
            <div className="post-line"></div>
            <Avatar  style={{ width: '90px', height: '90px', minWidth : '90px', minHeight : '90px', marginLeft:'10px' }} {...props.avatar} bgColor='transparent'/>
            {/* <div className="post-avatar"> */}
            {/* </div> */}
            <div className="post-content">
                <div className="post-title"><p>{props.user}</p></div>
                <div className="post-message"><p>{props.message}</p></div>
                <div className="post-time"><p>-{props.timestamp}</p></div>
            </div>
    </div>
    )
}

export default Post