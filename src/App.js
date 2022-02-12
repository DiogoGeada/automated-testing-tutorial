import './App.css';
import Grid from './components/grid/grid';
import SearchBar from './components/searchBar/searchBar';

function App() {
  return (
    <div className="App">
      <h1>Cocktail Library</h1>
      <hr/>
      <SearchBar></SearchBar>
      <Grid></Grid>
    </div>
  );
}

export default App;
