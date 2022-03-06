import { Component } from "react";
import { connect } from "react-redux";
import Grid from '../../components/grid/grid';
import SearchBar from '../../components/searchBar/searchBar';
import './home.css';
import actions from "../../redux/actions";

class Home extends Component {

    constructor(props){
        super(props);
        this.props.getDrinks();
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

const mapDispatchToProps = dispatch => {
    return  {
      getDrinks: (drink) => dispatch(actions.getDrinks(drink))
    }
}

  
export default connect(mapStateToProps, mapDispatchToProps)(Home)