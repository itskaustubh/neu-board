import React from 'react'
import './post.scss'

const Post = (props) => {
    return (
        <div className="post">
            <div className="post-line"></div>
            <div className="post-avatar" style={{ backgroundImage : `url('https://robohash.org/${props.avatar}?set=set5&size=150x150')`}}></div>
            <div className="post-content">
                <div className="post-title"><p>{props.user}</p></div>
                <div className="post-message"><p>{props.message}</p></div>
                <div className="post-time"><p>-{props.timestamp}</p></div>
            </div>
    </div>
    )
}

export default Post