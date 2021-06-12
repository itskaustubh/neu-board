import React from 'react'
import Post from './post'
import './dashboard.scss'

class Dashboard extends React.Component{
    
    render(){
        return <div className='dashboard-scaffold'>
            <div className="dashboard">
                <Post user='Peter Parker' avatar='1' message="This is a message" timestamp='Sun May 11 2020' />
                <Post user='Bruce Banner' avatar='2' message="It do be like that sometimes" timestamp='Sat April 22 2020' />
            </div>
        </div>
    }
}

export default Dashboard