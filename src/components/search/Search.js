import './search.css'

const SearchBox = () => {
    return ( <div className="search-box">
        <input id="store-name" className="search-input" placeholder="🔎 Qué estás buscando?">
        </input>
        <input id="ubication" className="search-input" placeholder="🌎 Dónde estás?">
        </input>
        <button>
        <b>Buscar </b>
        </button>

    </div> );
}
 
export default SearchBox;