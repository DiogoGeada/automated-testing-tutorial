import { Component } from 'react';
import actions from './redux/actions';
import './App.css';
import Grid from './components/grid/grid';
import SearchBar from './components/searchBar/searchBar';
import store from './redux/store';
import {connect} from 'react-redux';

class App extends Component{

  constructor(props){
    super(props);

    store.subscribe(() => { store.getState(); });
    this.props.getDrinks();
  }

  render(){
    return (
      <div className="App">
        <h1>Cocktail Library</h1>
        <hr/>
        <SearchBar></SearchBar>
        <Grid drinks={this.props.drinks}></Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    drinks: state.drinks
  }
}

const mapDispatchToProps = dispatch => {
  return  {
    getDrinks: (drink) => dispatch(actions.getDrinks(drink))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
