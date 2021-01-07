import React, { Component } from 'react';
import{
    BrowserRouter as Router,Switch,Route,Link
} from "react-router-dom";
import Navbar from  "./components/Navbar";
import Signup from './pages/Signup';
import Team from './pages/Team';
import Home from "./pages/Home";
import AddEmployee from './pages/AddEmployee';

export default class Routes extends Component {
    render() {
        return (
            <div>
               <Router>
      
        <Switch>
          <Route exact path="/">
            <Navbar />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/team">
            <Team />
          </Route>
          <Route exact path="/profile">
            <AddEmployee />
          </Route>
          <Route exact path="/addemployee">
            <AddEmployee />
          </Route>
          
          
          
        </Switch>
     
    </Router> 
    </div>
           
        );
    }
}
