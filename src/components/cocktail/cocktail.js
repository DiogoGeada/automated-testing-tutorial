import React, { Component } from 'react';
import './cocktail.css';

export default class Cocktail extends Component {
  
  render (){
    return(
      <div className="drink">
        <img src={this.props.img} />
        <h3 className="title" >{this.props.title}</h3>
      </div>
    );
  }
}
