import React from 'react';
import RoomCard from '../components/RoomCard'

import { Button, Card, Image, Icon } from 'semantic-ui-react'


class UserPage extends React.Component{


    render(){
        return(
            <div>
                <img onClick={()=>this.props.history.push('/')}className= "user-page-home-button" src="./LogoIcon.png" alt="logo"/>
                <h4>{this.props.currentUser.name}</h4>
                <h2>My Rooms</h2>
            </div>
        )
    }

}

export default UserPage