import { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import './searchBar.css';

class SearchBar extends Component{

    constructor(props){
        super(props)
        this.state = {
            keywords: ""
        }
        this.search = this.search.bind(this);
    }

    render(){
        return(
            <div className="search" >
                <input type="text" aria-label="searchbar" placeholder="Search for a cocktail..." value={this.state.keywords} 
                onChange={e => this.setState({"keywords": e.target.value})}
                onKeyPress={e => {
                    if(e.key == "Enter") 
                        this.props.search(this.state.keywords)
                    }}
                />
                <button onClick={this.search} aria-label="search">
                    <i className="fa fa-search"></i>
                </button>
        </div>
        );
    }

    search = (e) => {
        e.preventDefault();
        this.props.search(this.state.keywords);
    }
}

const mapDispatchToProps = dispatch => ({
    search: drink => dispatch(actions.getDrinks(drink)) 
})

export default connect(null, mapDispatchToProps)(SearchBar);