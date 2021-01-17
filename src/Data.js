import React, { Component } from 'react';
import './App.css';

class Data extends Component {
  
    render(){
  return (
    <div >
    <h3>Data </h3> 
    <p><b>Name:</b> { this.props.name}</p>
    <p><b>Second Name:</b> {this.props.sname}</p>
    <p><b>Mail:</b> {this.props.email}</p>
    <p><b>Password:</b> {this.props.mdp}</p>
    </div>
  );
}
}
export default Data;