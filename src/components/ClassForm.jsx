import React, { Component } from 'react';

class ClassForm extends Component {

  constructor(){
    super();
    this.state = {name:"", email:"", password:""}
  }

  handleName = (e)=>{this.setState({name:e.target.value});}

  handleEmail = (e)=>{this.setState({email:e.target.value});}

  handlePassword = (e)=>{this.setState({password:e.target.value});}

  handleSubmit = (e)=>{
    e.preventDefault();
    console.log({Name:this.state.name, Email:this.state.email, Password:this.state.password});
  }

  render() {
    return (
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="" onSubmit={this.handleSubmit} id="form">
            <h1>Codetrain Account</h1>
            <label htmlFor="name"></label>
            <input type="text" placeholder="Name" onChange={this.handleName} value={this.state.name} id="name"/>
            
            <label htmlFor="name"></label>
            <input type="email" placeholder="Email" onChange={this.handleEmail} value={this.state.email} id="email"/>
            
            <label htmlFor="name"></label>
            <input type="password" placeholder="Password" onChange={this.handlePassword} value={this.state.password} id="password"/>
            
            <button onChange={this.handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ClassForm;
