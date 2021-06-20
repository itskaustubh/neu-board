import React, { Component } from 'react'
import Dashboard from './dashboard'
import Welcome from './Welcome'
import './Home.scss'


export class Home extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div style={{display : 'flex'}}>
                <div className="dashboard-god">
                    <Dashboard/>
                </div>
                <div className="welcome-god">
                    <Welcome/>
                </div>
            </div>
        )
    }
}

export default Home