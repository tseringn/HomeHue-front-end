import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer'
import Login from './components/Login'

function App() {
  return (
    <Router>
      <div>
        
        <Route exact path="/" render= {routerProps => <HomeContainer {...routerProps}/>} />
        <Route exact path="/login" component={Login}/>
      </div>
    </Router>
  )
  
}

export default App;
