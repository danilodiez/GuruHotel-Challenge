import Card from '../cards/Card';
import './card-list.css';
import {useSelector} from 'react-redux';
import {useState, useEffect} from 'react'
import LoadingGif from './loading.gif'

const CardList = () => {
    var rows = [];
    const datos= useSelector(state => state.stores)   
    const [storesData, setStoreData] = useState([])
    
    
    useEffect(() => {
      
      if(datos.stores.hasOwnProperty('data')){
        
        setStoreData(datos.stores.data.search.business)
      
      }
    }, [datos]);
    rows = storesData.map((item, i)=><Card key={i} storesData={item}/>)

    
  return ( 
      <div className="cards-list">
        <h2>Best Results</h2>
        {datos.loading?<img className="loading-gif" src={LoadingGif} alt="Loading" />:<>{rows}</>}
        
        
        
        </div>
     )
}
 
export default CardList;