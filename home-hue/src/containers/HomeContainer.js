import React from 'react';
import RoomCard from '../components/RoomCard'
import NavBar from '../components/NavBar'
import { Button, Card, Image, Icon } from 'semantic-ui-react'


class HomeContainer extends React.Component{

    render(){

        let publicRooms= this.props.rooms.filter(room=>room.pvt===false)
        let mostRecentRooms = publicRooms.slice(Math.max(publicRooms.length - 15, 0))
        let mostLikedRooms = publicRooms.sort((a,b)=> a.likes.length < b.likes.length ? 1 : -1).slice(0,15)

        return(
            <div>
                <NavBar history={this.props.history} currentUser={this.props.currentUser} logout={this.props.logout}/>
                
            
                {/* <img className="banner-img" src="./logobanner.png" alt="banner" /> */}

                {/* <img className="banner-img" src="./bannerimg2.png" alt="banner" /> */}

                <img className="logo-banner-img " src="./bannerimg3.png" alt="banner" />

                <img className="banner-img" src="./bannerimg1.png" alt="banner" />
        
    

                <h3>Recently Created Room Schemes:</h3>
                    {mostRecentRooms.map(room=>(<RoomCard key ={room.id} {...room} currentUser={this.props.currentUser} history={this.props.history} handleNewRoomLike={this.props.handleNewRoomLike} handleUnlike={this.props.handleUnlike}/>))}

                <h3>Top Ranked Room Schemes:</h3>
                    {mostLikedRooms.map(room=>(<RoomCard key ={room.id} {...room} currentUser={this.props.currentUser} history={this.props.history} handleNewRoomLike={this.props.handleNewRoomLike} handleUnlike={this.props.handleUnlike}/>))}
      
            </div>
            
        )
    }
}

export default HomeContainer