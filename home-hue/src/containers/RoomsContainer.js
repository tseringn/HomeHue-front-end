import React from 'react';
import RoomCard from '../components/RoomCard'


class RoomsContainer extends React.Component {

    render(){

        let publicRooms= this.props.rooms.filter(room=>room.pvt===false)
        let mostRecentRooms = publicRooms.slice(Math.max(publicRooms.length - 15, 0))
        let mostLikedRooms = publicRooms.sort((a,b)=> a.likes.length < b.likes.length ? 1 : -1).slice(0,15)

        return(

            <div>

                <i className="home basic huge icon" onClick={()=>this.props.history.push('/')} style={{marginLeft: '1em', position: 'fixed', zIndex: '3', backgroundColor: "#D3D3D3", borderRadius: '20%', }}></i>

                <div className='rooms-container-content'>
                    <h1>ROOOMMMSSS</h1>

                    <div className="ui icon input" id="search">
                    <input className="navbar-search ui icon input" type="text" placeholder="Search..."/>
                    <i className="circular search link icon"></i>
                    </div>
                </div>
                <div className="room-card-container">
                    {this.props.rooms.map(room=>(<RoomCard key ={room.id} {...room} currentUser={this.props.currentUser} history={this.props.history} handleNewRoomLike={this.props.handleNewRoomLike} handleUnlike={this.props.handleUnlike}/>))}
                </div>
            </div>
            
        )
    }
}


export default RoomsContainer