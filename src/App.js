import React from 'react';
import About from './components/About/About';
import Login from "./components/Login/Login";
import Home from './components/Home/Home';
import Locations from './components/Locations/Locations';
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import LocationsInfo from './components/LocationsInfo/LocationsInfo';

export default function App() {
  return (
      <Router>
        <div>
          <ul className="navmenu">
            {/* <img className="navimg" src="https://m.diletant.media/upload/resize_cache/iblock/821/250_500_1/8218cfc5445fc09e5b7374cfab1c2364.png"></img> */}
            <Link className="navlink" to="/">Home </Link>
            <Link className="navlink" to="/locations">Locations </Link>
            <Link className="navlink" to="/about">About </Link>
            <Link className="navlink" to="/Login" >Login</Link>
          </ul>

          <Switch>
            <Route path="/Locations" exact>
              <Locations />
            </Route>
            <Route path="/Locations/:projectId" exact>
              <LocationsInfo />
            </Route>
            <Route path="/About">
             <About /> 
            </Route>
            <Route path="/Login">
            <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  ); 
  }
