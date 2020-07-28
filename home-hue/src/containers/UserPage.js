import React from 'react';
import RoomCard from '../components/RoomCard'

import { Button, Card, Image, Icon, Modal, Header } from 'semantic-ui-react'


class UserPage extends React.Component{

    state = { 
        
        modalOpen: false,
        room: {
            user_id: this.props.currentUser.id,
            name: '',
            description: '',
            img_url: '',
            pvt: false
        }
    
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    getUsersRooms = () => {
        let userRooms = this.props.rooms.filter(room => room.user_id===this.props.currentUser.id)
        return userRooms.map(room=>(<RoomCard key ={room.id} {...room} currentUser={this.props.currentUser} handleNewRoomLike={this.props.handleNewRoomLike} handleUnlike={this.props.handleUnlike} history={this.props.history}/>))
    }

    handleChange = (e) => {
        this.setState({room: {...this.state.room, [e.target.name]: e.target.value}})
    }

    handleCheck = (e) => {
        this.setState({room: {...this.state.room, pvt: !this.state.room.pvt} })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/rooms', {
            method: "POST",
            headers: {
                accept: 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state.room)
        })
        .then(resp=>resp.json())
        .then(newRoom=> {
        this.props.handleNewRoom(newRoom)
        this.handleClose()  
        })
    }

    newRoomForm = () => {

        const {name, description, img_url,pvt} = this.state.room

    return (<form onSubmit={this.handleSubmit} >
            <div className="ui large form" id="login-form" >
            <h2>Create a Room</h2>
            <div className="two fields">
            <div className="field">
                {/* <label>Name</label> */}
                <input onChange={this.handleChange} name='name' value={name} className = "input" placeholder="Room Name" type="text"/>
            </div>
            
            </div>
                <div className="two fields">
                    <div className="field">
                        {/* <label>Username</label> */}
                        <textarea rows="3" onChange={this.handleChange}  name='description' value={description} className = "input" placeholder="Description"/>
                    </div>
                </div>

                <div className="two fields">
                    <div className="field">
                        {/* <label>Email</label> */}
                        <input onChange={this.handleChange}  name='img_url' value={img_url} className = "input" placeholder="Main Room Image URL Here" type="text"/>
                    </div>
                </div>

                <div className="two fields"> 
                    <div className="ui toggle checkbox">
                        <input onChange={this.handleCheck} checked={pvt} type="checkbox" name="pvt"/>
                        <label style={{color: "white"}}>Make your room private</label>
                    </div>
                </div>
            
        
            <button className="ui submit grey button" type='submit' >Create Room</button>
            <button className="ui submit grey button" onClick={this.handleClose}>Cancel</button>
        </div>
        </form>)
    }

    

   roomFormModal = () => (
    <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'>
    
        <Header  />
        <Modal.Content>
        {this.newRoomForm()}
        </Modal.Content>
    </Modal>
   )
        

    render(){
        return(
            <div>
                {this.roomFormModal()}
                <div className="user-page-nav">
                    <i onClick={()=>this.props.history.push('/')}  className="home basic icon big user-page-icon"></i>
                    <i  className="pencil icon big user-page-icon" ></i>
                    <i onClick={this.handleOpen} className="add sign icon big user-page-icon"></i>
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