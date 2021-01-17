import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from './Home.js';
  import Contact from './Contact.js';
  import About from './About.js';

class Navbar extends Component {
    render(){
  return (
      <Router>
    <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand" >My Project</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <Link to="/"  className="nav-item nav-link " >Home <span className="sr-only">(current)</span></Link>
            <Link to="/about"  className="nav-item nav-link" >About</Link>
            <Link to="/contact" className="nav-item nav-link" >Contact</Link>
            
            </div>
        </div>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div></Router>
  );
}}


export default Navbar;