import './search.css'
import {useState} from 'react'
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
        <input id="store-name" className="search-input" placeholder="🔎 pizza, tacos, delivery..."
        autoComplete="off" onChange={event => setStore(event.target.value)}>
        </input>
        <input id="ubication" className="search-input" placeholder="🌎 Where?" autoComplete="off" onChange={event => setUbication(event.target.value)}>
        </input>
        <button id="searchButton" onClick={()=>{search(store, ubication)}}>
         <b>Search </b>
        </button>

    </div> );
}
 
export default SearchBox;