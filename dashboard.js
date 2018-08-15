import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import { Auth }  from '../components/ProtectedRoute';

export default class Dashboard extends Component {
  
  constructor (props) {
    super(props);
    	this.state = {
    		data:[]
    	};
    };

  componentDidMount() { 
    self=this;
  	axios.get("http://localhost:3000/api/issue").then(function(data){
  		self.setState({data:data.data});
  	});
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary">Add Issue</button> 
        <table className="table">
      	<thead>
      	<th>Title</th>
      	<th>Status</th>
      	<th>Created by</th>
      	<th>Created on</th>
      	<th>Action</th>
      	</thead>
        	<tbody>
          {this.state.data.map(function(value,index){
            return (<tr><td>{value.title}</td><td>{value.status}</td><td>{value.createdBy}</td><td>{value.createdOn}</td><td>Edit Delete</td></tr>)
          })}
        	</tbody>
      </table> 
      </div>
    );
  }
}
