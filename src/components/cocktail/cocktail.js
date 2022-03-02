import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import actions from '../../redux/actions';
import Favorite from '../favorite/favorite';
import './cocktail.css';

class Cocktail extends Component {

  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div className="drink">
        <Favorite></Favorite>
        <Link to={"/recipe/"+this.props.id}>
          <img src={this.props.img} alt=""/>
          <h3 className="title" >{this.props.title}</h3>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectDrink: (drinkId) => dispatch(actions.selectDrink(drinkId))
  }
}

export default connect(null, mapDispatchToProps)(Cocktail);