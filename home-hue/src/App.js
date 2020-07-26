import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer'
import Login from './components/Login'

class  App extends React.Component {
state={
    users: [],
    currentUser: null
  }

  componentDidMount(){
        fetch("http://localhost:3000/users")
        .then(resp=>resp.json())
        .then(users=> this.setState({users}))
  }

  setCurrentUser=(id)=>{
    this.setState({currentUser: id})
  }



  render(){
    return (
      <Router>
        <div>
        
          <Route exact path="/" render= {routerProps => <HomeContainer {...routerProps}/>} />
          <Route exact path="/login" render={routerProps=>
              <Login {...routerProps} users={this.state.users} setCurrentUser={this.setCurrentUser} />
            }/>
        </div>
      </Router>
    )
  }
}

export default App;
