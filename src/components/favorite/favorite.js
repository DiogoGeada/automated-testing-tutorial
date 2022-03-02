import { Component } from "react";
import './favorite.css';

export default class Favorite extends Component {

    constructor(props) {
        super(props);
        this.state = {favorite: false};
    }

    render() {
        return (
            <div className="favorite">
                <button onClick={this.toggleFavorite} className={this.state.favorite ? "active" : ""}>
                    <i className="fa fa-heart"></i>
                </button>
            </div>
        );
    }

    toggleFavorite = () => {
        this.setState({
            favorite: !this.state.favorite
        });
    }

}