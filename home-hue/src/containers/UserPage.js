import React from 'react';
import RoomCard from '../components/RoomCard'

import { Button, Card, Image, Icon } from 'semantic-ui-react'


class UserPage extends React.Component{

    getUsersRooms = () => {
        return this.props.currentUser.rooms.map(room=>(<RoomCard key ={room.id} {...room} user={this.props.currentUser} />))
    }


    render(){
        return(
            <div>
                <div className="user-page-nav">
                    <i onClick={()=>this.props.history.push('/')}  className="home basic icon big user-page-icon"></i>
                    <i  className="pencil icon big user-page-icon" ></i>
                    <i className="add sign icon big user-page-icon"></i>
                </div>
                <div className="user-header-info">
                    <img className="main-profile-picture" src={this.props.currentUser.image_url} alt={this.props.currentUser.name}/>
                    <div>
                        <h2>{this.props.currentUser.name}</h2>
                        <small>@{this.props.currentUser.username}</small>
                        <h5>{this.props.currentUser.email}</h5>
                    </div> 
                </div>
                {this.getUsersRooms()}
            </div>
        )
    }

}

export default UserPage