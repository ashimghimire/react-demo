import React, { Component } from 'react';
import axios from 'axios';
export default class Dashboard extends Component {
  
  constructor (props) {
  	super(props);
  	this.state = {
  		data:[]
  	}
  }

  ComponentDidMount(){
  	axios.get("localhost:3000/issues").then(function(data){
  		this.setState({data});
  	});
  }

  render() {
    return (
      <div> <table>
      	<thead>
      	<th>Title</th>
      	<th>Status</th>
      	<th>Created by</th>
      	<th>Created on</th>
      	<th>Action</th>
      	</thead>
      	<tbody>
      	</tbody>
      </table> </div>
    );
  }
}
