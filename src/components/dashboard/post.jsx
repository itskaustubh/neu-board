import React from 'react'
import Avatar from 'react-nice-avatar'
import moment from 'moment'
import './post.scss'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const isBlank = (str) => { 
    return (!str || str.length <= 0 ||  str.trim() === '')
}

const Post = (props) => {
    // console.log(props)
    const {user,avatar,message,date,media} = props.message
    return (
        <div className="post">
            <div className="post-line"></div>
            <Avatar  style={{ width: '90px', height: '90px', minWidth : '90px', minHeight : '90px', marginLeft:'10px' }} {...avatar} bgColor='transparent'/>
            {/* <div className="post-avatar"> */}
            {/* </div> */}
            <div className="post-content">
                <div className="post-title no-select"><p>{user}</p></div>
                <div className="post-message user-selectable">{message}</div>
                {
                    isBlank(media) ? null : 
                    <div className="post-media">
                        <Zoom>
                            <img src={media} alt='Link broken :/'/> 
                        </Zoom>
                    </div>
                }
                <div className="post-time"><p>-{moment(date).calendar()}</p></div>
            </div>
    </div>
    )
}

export default Post