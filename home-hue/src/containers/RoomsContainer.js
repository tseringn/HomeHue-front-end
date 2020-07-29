import React from 'react';
import RoomCard from '../components/RoomCard'


class RoomsContainer extends React.Component {

    render(){

        let publicRooms= this.props.rooms.filter(room=>room.pvt===false)
        let mostRecentRooms = publicRooms.slice(Math.max(publicRooms.length - 15, 0))
        let mostLikedRooms = publicRooms.sort((a,b)=> a.likes.length < b.likes.length ? 1 : -1).slice(0,15)

        return(

            <div>

                <i className="home basic big icon" onClick={()=>this.props.history.push('/')} style={{margin: '1em', }}></i>

                <h1>ROOOMMMSSS</h1>

                <div className="ui icon input" id="search">
                <input className="navbar-search ui icon input" type="text" placeholder="Search..."/>
                <i className="circular search link icon"></i>
                </div>

                <h3>Recently Created Room Schemes:</h3>
                {mostRecentRooms.map(room=>(<RoomCard key ={room.id} {...room} currentUser={this.props.currentUser} history={this.props.history} handleNewRoomLike={this.props.handleNewRoomLike} handleUnlike={this.props.handleUnlike}/>))}

                <h3>Top Ranked Room Schemes:</h3>
                {mostLikedRooms.map(room=>(<RoomCard key ={room.id} {...room} currentUser={this.props.currentUser} history={this.props.history} handleNewRoomLike={this.props.handleNewRoomLike} handleUnlike={this.props.handleUnlike}/>))}
            </div>
            
        )
    }
}


export default RoomsContainer