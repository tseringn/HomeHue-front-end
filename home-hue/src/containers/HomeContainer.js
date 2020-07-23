import React from 'react';


class HomeContainer extends React.Component{

    state = {
        rooms: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/rooms")
        .then(resp=>resp.json())
        .then(rooms=> this.setState({rooms}))
    }

    render(){
        return(
            <div>
            {this.state.rooms.map(room=><h1>{room.name}</h1>)}
            </div>
        )
    }
}

export default HomeContainer