import { Component } from 'react';
import actions from './redux/actions';
import './App.css';
import store from './redux/store';
import {connect} from 'react-redux';
import { Outlet } from 'react-router-dom';

class App extends Component{

  constructor(props){
    super(props);

    store.subscribe(() => { store.getState(); });
    this.props.getDrinks();
  }

  render(){
    return (
      <div className="App">
        <header>
          <h1>Cocktail Library</h1>
        </header>
        <Outlet />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return  {
    getDrinks: (drink) => dispatch(actions.getDrinks(drink))
  }
}

export default connect(null, mapDispatchToProps)(App);
