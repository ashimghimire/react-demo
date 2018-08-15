import React, { Component } from 'react';
import axios from 'axios';
export default class Issue extends Component {
  
  constructor(props){
    super(props);
    this.state = { 
                'title':'',
                'status':'',
                'createdOn':'', 
                'createdBy':''
                };

    }

    handleChange(event, key){
      this.setState({[key]:event.target.value}); 
      event.preventDefault(); 
    }


    submit = ()=>{
     axios.post('http://localhost:3000/api/issue', {data:this.state}).then(function(res){
      console.log(res);
      window.location="/dashboard";
     });
    } 

  render() {

    return (
      <div className="container">
      <div className="col-sm-6">
      <div className="row">
        <div className='input-group'>
        <input type="text" className="form-control" 
            value={this.state.title} 
            onChange={(e)=>this.handleChange(e,'title')} placeholder="Title"/>
        </div>
        </div>
        <div className='row'>
        <div className='input-group'>
          <input 
          value={this.state.status} 
          type="text" onChange={(e)=>this.handleChange(e,'status')} className="form-control" placeholder="Status"/>
        </div>
        </div>
        <div className='row'>
        <div className='input-group'>
          <input type="text"
            value={this.state.createdBy} 
            onChange={(e)=>this.handleChange(e,'createdBy')} className="form-control" placeholder="Created by"/>
        </div>
        </div>
        <div className='row'>
        <div className='input-group'>
          <button onClick={()=>this.submit()} type="button" className="btn btn primary">Save Issue</button>
        </div>
        </div>
        </div>

      </div>
    );
  }
}
