import './search.css'

const SearchBox = () => {
    return ( <div className="search-box">
        <input id="store-name" className="search-input">
        </input>
        <input id="ubication" className="search-input">
        </input>
        <button>
           Buscar 
        </button>

    </div> );
}
 
export default SearchBox;