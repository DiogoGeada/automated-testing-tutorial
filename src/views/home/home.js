import { Component } from "react";
import { connect } from "react-redux";
import Grid from '../../components/grid/grid';
import SearchBar from '../../components/searchBar/searchBar';
import './home.css';

class Home extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="home-content">
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

  
export default connect(mapStateToProps)(Home)