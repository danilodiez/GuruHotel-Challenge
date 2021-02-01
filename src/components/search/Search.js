import './search.css'
import {useEffect, useState} from 'react'
import fetchStores from '../../scripts/fetchStores'
import {useDispatch} from 'react-redux'


const SearchBox = () => {
    
    const [store, setStore] = useState('');
    const [ubication, setUbication] = useState('');   

    const dispatch = useDispatch()
    
    function search(store, ubication){
       
        if(store!=="" && ubication!==""){
            dispatch(fetchStores(store, ubication))
            
        }
    }


    return ( <div className="search-box">
        <input id="store-name" className="search-input" placeholder="🔎 Qué estás buscando?"
        onChange={event => setStore(event.target.value)}>
        </input>
        <input id="ubication" className="search-input" placeholder="🌎 Dónde estás?" onChange={event => setUbication(event.target.value)}>
        </input>
        <button>
        <b id="searchButton" onClick={()=>{search(store, ubication)}}>Buscar </b>
        </button>

    </div> );
}
 
export default SearchBox;