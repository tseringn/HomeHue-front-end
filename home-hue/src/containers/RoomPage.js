import React from 'react'

class RoomPage extends React.Component{

    thisRoom=()=>{
       return this.props.rooms.find(room=> room.id==this.props.match.params.id)
    }
    render(){
        console.log(this.props.match.params.id)

        return( 
            <div>

               <h2>{this.thisRoom().name}</h2> 
            <h5>created by @{this.thisRoom().user.username}</h5>




            </div>
        )
    }
}
export default RoomPage