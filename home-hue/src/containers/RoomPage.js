import React from 'react'
import PhotoCard from '../components/PhotoCard'

class RoomPage extends React.Component{

    state = {
        img_url: '',   
    }

    thisRoom=()=>{
       return this.props.rooms.find(room=> room.id==this.props.match.params.id)
    }

    handleChange =(e)=>{
        this.setState({img_url: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/photos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                img_url: this.state.img_url,
                room_id: this.thisRoom().id
            })
        })
        .then(resp=>resp.json())
        .then(newPhoto=> {
            console.log(newPhoto)
            this.setState({img_url: ''})
        })
    }

    deleteRoom = () => {
        fetch(`http://localhost:3000/rooms/${this.thisRoom().id}`,{method: "DELETE",})
        this.props.handleDeleteRoom(this.thisRoom().id)
        this.props.history.push(`/@${this.props.currentUser.username}`)
    }



    roomBelongsToCurrentUser = () =>{
        if (this.props.currentUser && this.props.currentUser.id===this.thisRoom().user_id){
            return true
        } else{
            return false
        }
    }

    render(){
        console.log(this.props.match.params.id)
        return( 
            <div className="room-page" style={{backgroundImage: `url(${this.thisRoom().img_url})`, backgroundSize:'100%', backgroundRepeat: "no-repeat", paddingBottom: "30%"}}>
                
                <i className="arrow circle big left icon" onClick={()=>this.props.history.goBack()} style={{margin: '1em'}}></i>
                <div className="room-page-header">
                    <h1 style={{fontSize: '40px'}}>{this.thisRoom().name}</h1>
                    <h6>created by @{this.thisRoom().user.username}</h6> 
                </div>

                <div className='room-page-actions'>
                    {this.roomBelongsToCurrentUser() &&
                        <button className="ui secondary button" onClick={()=>this.deleteRoom()} style={{margin: '1em'}}> <i className="trash alternate icon"></i>Delete Room</button>
                    }
                    <br/>
                </div>

                {this.roomBelongsToCurrentUser() &&
                        <div class="ui action input" style={{marginLeft: '2em'}}>
                            <form className="ui form" onSubmit={this.handleSubmit} style={{display: 'inline'}}>
                                <input onChange={this.handleChange} type="text" value={this.state.img_url} placeholder="New Image URL Here"/>
                                <span><button type="submit" className="ui inverted secondary button">Add Image <i className="plus icon"></i></button></span>
                            </form>
                        </div>
                }



                {this.thisRoom().photos.map(photo=>
                    <PhotoCard key={photo.id} {...photo}/>
                )}

            </div>
        )
    }
}
export default RoomPage