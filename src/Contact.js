import React, { Component } from 'react';
import './App.css';
import Data from './Data.js';
import DataSubmitted from './DataSubmitted.js';

class Contact extends Component {
  //  name_err=false ;
    constructor(){
        super();
       console.log("first log");
        this.state={
            name:"",
            sname:"",
            email:"",
            mdp:"",
            names:"",
          snames:"",
          emails:"",
          mdps:"",
          name_err:true ,
          sname_err:true ,
          mdp_err:true ,
          email_err:true
        };
         

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleBlur=this.handleBlur.bind(this);
        }
        handleSubmit(event){
          console.log("submit log");
          this.setState({
            name:"",
            sname:"",
            email:"",
            mdp:"",
            names:this.state.name,
            snames:this.state.sname,
            emails:this.state.email,
            mdps:this.state.mdp
          })
          event.preventDefault();
         console.log(this.state);         
      }
    handleChange(event){
      console.log("change log");
        const{name,value}=event.target;
        this.setState({
          [name]:value
        })
    }
    handleBlur(event){
      console.log("Blur log");
      const{name,value}=event.target;
      if(value===""){
        if(name==="name"){
          this.setState({name_err:false})
        }
        if(name==="sname"){
          this.setState({sname_err:false})
        }
        if(name==="email"){
          this.setState({email_err:false})
        }
        if(name==="mdp"){
          this.setState({mdp_err:false})
        }

      }
      
       else {
        if(name==="name"){
          this.setState({name_err:true})
        }
        if(name==="sname"){
          this.setState({sname_err:true})
        }
        if(name==="email"){
          this.setState({email_err:true})
        }
        if(name==="mdp"){
          this.setState({mdp_err:true})
        }
       } 

      
      
    
    }
    render(){
  return (
   
<div className="container">
  <form onSubmit={this.handleSubmit}>
    <div>
    <h1 className="page center"> Contact-us  </h1>

    <label htmlFor="name"> Name  <br/>
    <input
      className="red-border form-control "
      id="name"
      type="text"
      name='name'
      required
        value={this.state.name}
       onChange={this.handleChange}
      onBlur={this.handleBlur}
       />
      
      <div className="form-err text-center help-block" hidden={this.state.name_err}>This field is required!<br/></div></label>

  
      <br/>
    <label htmlFor="sname"> Second name 
    <input  
      className="form-control"
      id="sname"
      type="text"
      name="sname"
      required
      value={this.state.sname}
      onChange={this.handleChange}
      onBlur={this.handleBlur}
       />
     
       <div className="form-err text-center help-block" hidden={this.state.sname_err} >This field is required!<br/></div></label>
       <br/>
    


    <label htmlFor="email"> E-mail  
    <input
      className="form-control"
      id="email"
      type="email"
      name="email"
      required
      value={this.state.email}
      onChange={this.handleChange}
      onBlur={this.handleBlur}
      
       />
       <div className="form-err text-center help-block" hidden={this.state.email_err}>Please enter a valid email! <br/></div>
       </label>
       <br/>
    <label htmlFor="mdp"> Password 
    <input
      className="form-control"
      id="mdp"
      type="password"
      name="mdp"
      required
      value={this.state.mdp}
      onChange={this.handleChange}
      onBlur={this.handleBlur}
       />
       <div className="form-err text-center help-block" hidden={this.state.mdp_err}>This field is required!<br/></div>
       </label>

       <br/>
    <div className="">
      <input
      className=" btn btn-primary"
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
  <div className="row">
   
    <div className="col-6">
      <DataSubmitted {...this.state}
      handleChange={this.handleChange}
      />
    </div>

    <div className="col-6">
      <Data {...this.state}
      handleChange={this.handleChange}/>
    </div>

  </div>
</div>



  );
}
}
export default Contact;