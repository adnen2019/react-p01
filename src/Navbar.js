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
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" >My Project</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <Link to="/"  class="nav-item nav-link " >Home <span class="sr-only">(current)</span></Link>
            <Link to="/about"  class="nav-item nav-link" >About</Link>
            <Link to="/contact" class="nav-item nav-link" >Contact</Link>
            
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