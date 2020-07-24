import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react'


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
                <h1>Home Hue</h1>
                <Button inverted color='teal'>
                    Teal
                </Button>
                <Button animated='fade' color="red" onClick={()=>this.props.history.push('/login')}>
                    <Button.Content visible>Login or Create Account</Button.Content>
                    <Button.Content hidden>Start Hueing!</Button.Content>
                </Button>
                <h3>Recently Created Room Schemes:</h3>
                {this.state.rooms.map(room=><h1>{room.name}</h1>)}
                <Card.Group>
                    <Card>
                    <Card.Content>
                        <Image
                        floated='right'
                        size='mini'
                        src='/images/avatar/large/steve.jpg'
                        />
                        <Card.Header>Steve Sanders</Card.Header>
                        <Card.Meta>Friends of Elliot</Card.Meta>
                        <Card.Description>
                        Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                        <Button basic color='green'>
                            Approve
                        </Button>
                        <Button basic color='red'>
                            Decline
                        </Button>
                        </div>
                    </Card.Content>
                    </Card>
                </Card.Group>
            </div>
        )
    }
}

export default HomeContainer