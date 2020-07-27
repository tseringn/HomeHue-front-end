import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer'
import UserPage from './containers/UserPage'
import Login from './components/Login'

class  App extends React.Component {
state={
    users: [],
    rooms:[],
    currentUser: null
  }

  componentDidMount(){
        fetch("http://localhost:3000/users")
        .then(resp=>resp.json())
        .then(users=> this.setState({users}))

        fetch("http://localhost:3000/rooms")
        .then(resp=>resp.json())
        .then(rooms=> this.setState({rooms}))
  }

  handleNewUser = (newUser) => {
    this.setState({users: [...this.state.users, newUser]})
  }

  handleNewRoom = (newRoom) => {
    this.setState({rooms: [...this.state.rooms, newRoom]})
  }


  setCurrentUser=(user)=>{
    this.setState({currentUser: user})

  }

  logout = () => {
    this.setState({currentUser: null})
  }

  



  render(){
    return (
      <Router>
        <div>
        
          <Route exact path="/" render= {routerProps => <HomeContainer {...routerProps} rooms={this.state.rooms} currentUser={this.state.currentUser} logout={this.logout}/>} />
          <Route exact path="/login" render={routerProps=>
              <Login {...routerProps} users={this.state.users} setCurrentUser={this.setCurrentUser} handleNewUser={this.handleNewUser}/>
            }/>
          <Route exact path='/rooms' render= {routerProps => <UserPage {...routerProps} currentUser={this.state.currentUser} rooms={this.state.rooms} handleNewRoom={this.handleNewRoom}/>} />
        </div>
      </Router>
    )
  }
}

export default App;
