import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Contact from './Contact.js';
import About from './About.js';

class App extends Component {
  render(){
  return (
    <div >
      <Navbar/>
      {/* <Contact/> */}
    </div>
  );
}}
export default App;
