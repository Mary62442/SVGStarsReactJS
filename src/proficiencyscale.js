import React, { Component } from 'react';
import './App.css';
import Star from './star'

class ProficiencyScale extends Component {
  
  constructor(props) {
    super(props);
    this.stars = [];
    this.interEnter = {};
    this.interExit ={};
    this.counter=0;
    this.state= {
      hover:false,test:0      
    }
  };

 

hideStars = (event) => {
event.stopPropagation(true);
clearInterval(this.interEnter);
this.interExit = setInterval(()=> {  
      if(--this.counter === 0) { clearInterval(this.interExit); }        
        this.stars.pop();
       this.setState({test:this.counter})     
    },100);
    this.setState({ hover:false});    
  };



  displayStars = (event) => {    
    event.stopPropagation(true);
    this.stars=[];
    this.counter = 0;
    clearInterval(this.interExit);
    if (this.stars.length === this.props.numberOfStars) return; 
    this.setState({ hover:true});    
    this.interEnter = setInterval(()=> {
      if(++this.counter === this.props.numberOfStars) { clearInterval(this.interEnter); }        
        this.stars.push((()=>{
        return ( <Star key ={this.counter}/> )
        })())

       this.setState({test:this.counter})     
    },100); 
  };

  componentDidMount() {}

  render() {      
      return (
      <div onMouseEnter ={this.displayStars} onMouseLeave = {this.hideStars} className="starsContainer" ref = 'stars'>{this.stars}</div>
      )
    }
  }


export default ProficiencyScale;
