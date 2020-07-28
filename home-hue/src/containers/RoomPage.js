import React from 'react'
import PhotoCard from '../components/PhotoCard'

class RoomPage extends React.Component{

    state = {
        img_url: '',   
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
        .then(res=> {
            console.log(res)
            this.setState({img_url: ''})
        })
    }

    thisRoom=()=>{
       return this.props.rooms.find(room=> room.id==this.props.match.params.id)
    }

    renderAddImageField = () =>{
        if (this.props.currentUser && this.props.currentUser.id==this.thisRoom().user_id){
            return true
        } else{
            return false
        }
    }

    render(){
        console.log(this.props.match.params.id)

        return( 
            <div>
                <i class="arrow circle huge left icon" onClick={()=>this.props.history.goBack()}></i>

                <h2>{this.thisRoom().name}</h2> 
                <h5>Created By ~  @{this.thisRoom().user.username}</h5>

                {this.renderAddImageField() &&
                    <div class="ui action input">
                        <form onSubmit={this.handleSubmit}>
                            <input onChange={this.handleChange} type="text" value={this.state.img_url} placeholder="New Image URL Here"/>
                            <button type="submit" className="ui grey button">Add Image</button>
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