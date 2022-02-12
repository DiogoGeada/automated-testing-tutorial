import './searchBar.css';

export default function SearchBar(){
    return(
        <div className="search" >
            <input type="text" placeholder="Search for a cocktail..."/>
            <button>
                <i className="fa fa-search"></i>
            </button>
      </div>
    );
}
