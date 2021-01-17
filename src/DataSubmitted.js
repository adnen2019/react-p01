import React, { Component } from 'react';
import './App.css';

class DataSubmitted extends Component {
    render(){
  return (
    <div>
      <h3>Data Submitted</h3> 
      <p> <b>Name:</b> { this.props.names} </p>
      <p><b>Second Name:</b> {this.props.snames}</p>
      <p><b>Mail:</b> {this.props.emails}</p>
      <p><b>Password:</b> {this.props.mdps}</p>
    </div>
  );
}
}
export default DataSubmitted;