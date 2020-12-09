import React, { Component } from 'react';
import './App.css';
import Data from './Data.js';
import DataSubmitted from './DataSubmitted.js';

class Contact extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            sname:"",
            email:"",
            mdp:""
        }
        this.handleChange=this.handleChange.bind(this);

        }
    handleChange(event){
        const{name,value}=event.target;
    }
    render(){
  return (
   
<div class="container">
  <form>
    <div>
    <h1 class="page center"> Contact-us  </h1>

    <label for="name"> Name  </label><br/>
    <input
      class="form-control"
      id="name"
      type="text"
      name='name'
      required
      value={props.data.name}
      onChange={props.handleChange}
       />
      <br/>
      <div class="text-center help-block" >This field is required!<br/></div>

  

    <label for="sname"> Second name  </label><br/>
    <input  
      class="form-control"
      id="sname"
      type="text"
      name="sname"
      required
      value={props.data.sname}
      onChange={props.handleChange}

       /><br/>
       <div class="text-center help-block" >This field is required!<br/></div>

    


    <label for="email"> E-mail  </label><br/>
    <input
      class="form-control"
      id="email"
      type="email"
      name="email"
      required
      value={props.data.email}
      onChange={props.handleChange}
      
       /><br/>
       <div class="text-center help-block" >Please enter a valid email!<br/></div>
       
    <label for="mdp"> Password  </label><br/>
    <input
      class="form-control"
      id="mdp"
      type="password"
      name="mdp"
      required
      value={props.data.mdp}
      onChange={props.handleChange}
       /><br/>
       <div class="text-center help-block">This field is required!<br/></div>


       <br/>
    <div class="text-center">
      <input
      class=" btn btn-primary"
      type="submit"
      id="inscri"
      name="send"
      value="Send"
      
       />
    </div>

 <br/>
      </div>
  </form>
  <br/>
  <div class="row">
   
    <div class="col-6">
      <DataSubmitted/>
    </div>

    <div class="col-6">
      <Data data={this.state}
      handleChange={this.handleChange}/>
    </div>

  </div>
</div>



  );
}
}
export default Contact;