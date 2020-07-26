import React from 'react';
import RoomCard from '../components/RoomCard'
import NavBar from '../components/NavBar'
import { Button, Card, Image, Icon } from 'semantic-ui-react'


class HomeContainer extends React.Component{

    state = {
        rooms: [],
        // users: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/rooms")
        .then(resp=>resp.json())
        .then(rooms=> this.setState({rooms}))


    
    }



    render(){
        let mostRecentRooms = this.state.rooms.slice(Math.max(this.state.rooms.length - 15, 0))
        let mostLikedRooms = this.state.rooms.sort((a,b)=> a.likes.length < b.likes.length ? 1 : -1).slice(0,15)

        return(
            <div>
                <NavBar history={this.props.history} currentUser={this.props.currentUser} logout={this.props.logout}/>
                <h1>Home Hue- LOGO HERE</h1>
                

                <h3>Recently Created Room Schemes:</h3>
                    {mostRecentRooms.map(room=>(<RoomCard key ={room.id} {...room}/>))}

                <h3>Top Ranked Room Schemes:</h3>
                    {mostLikedRooms.map(room=>(<RoomCard key ={room.id} {...room}/>))}
      
            </div>
            
        )
    }
}

export default HomeContainer