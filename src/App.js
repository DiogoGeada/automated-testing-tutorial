import { Component } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';

export default class App extends Component{

  constructor(props){
    super(props);
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
