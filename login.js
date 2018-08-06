import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Redirect, withRouter } from 'react-router-dom'; 
import Dashboard from '../components/dashboard';

class Login extends Component {
	
	constructor(props) {
		super(props);
		this.login = this.login.bind(this);
	}
	

    render() {
    		return (
	      	  <div className='form-control'>
	      	  	<input onClick={()=>this.login()} type="Button" value="login with github"/>
	      	  </div>
			);
  	}

  login() {
		axios.get('//localhost:3000/login', 
			).then((response) => {
			if(response.data){
				return this.props.history.push("/dashboard");
			}
		});		
	}
}
export default Login;