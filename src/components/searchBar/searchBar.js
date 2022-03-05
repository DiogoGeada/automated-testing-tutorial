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
    }

    render(){
        return(
            <div className="search" >
                <input type="text" placeholder="Search for a cocktail..." value={this.state.keywords} 
                onChange={e => this.setState({"keywords": e.target.value})}
                onKeyPress={e => {
                    if(e.key == "Enter") 
                        this.props.search(this.state.keywords)
                    }}
                />
                <button onClick={() => this.search(this.state.keywords)}>
                    <i className="fa fa-search"></i>
                </button>
        </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    search: drink => dispatch(actions.getDrinks(drink)) 
})

export default connect(null, mapDispatchToProps)(SearchBar);