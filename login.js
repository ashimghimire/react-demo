import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Redirect, withRouter } from 'react-router-dom'; 
import Dashboard from '../components/dashboard';
import {Auth} from '../components/ProtectedRoute';
import localstorage from 'local-storage';
import FacebookLogin from 'react-facebook-login';

class Login extends Component {
	
	constructor(props) {
		super();
		this.state={
			isAuthenticated:false
		};
	}

	componentDidMount() {

	};

	



	 responseFacebook = (response) => {
        const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
        const options = {
            method: 'POST',
            body: tokenBlob,
            mode: 'cors',
            cache: 'default'
        };
        fetch('http://localhost:3000/auth/facebook/callback', options).then(r => {
            const token = r.headers.get('x-auth-token');
            r.json().then(user => {
                if (token) {
                	localstorage.set('user', user);
                	localstorage.set('token',token);
         			window.location="/dashboard";       	
              }
            });
        })
	};


	
    render() {
    		return (
	      	  <div className='form-control'>
	      	  		<FacebookLogin
				    appId="723995467990366"
				    fields="name,email,picture"
				    callback = {this.responseFacebook} />
	      	  </div>
			);
  	}
}
export default Login;
