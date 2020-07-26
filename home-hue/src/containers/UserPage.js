import React from 'react';
import RoomCard from '../components/RoomCard'

import { Button, Card, Image, Icon } from 'semantic-ui-react'


class UserPage extends React.Component{


    render(){
        return(
            <div>
                <div className="user-page-nav">
                    
                    <i onClick={()=>this.props.history.push('/')}  className="home basic icon huge user-page-icon"></i>
                    
                    <i  className="pencil icon huge user-page-icon" ></i>
                    <i className="add sign icon huge user-page-icon"></i>
                </div>
                
                <h2>My Rooms</h2>
            </div>
        )
    }

}

export default UserPage