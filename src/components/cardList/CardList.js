import Card from '../cards/Card';
import './card-list.css';
import {useSelector} from 'react-redux';
import {useState, useEffect} from 'react'

const CardList = () => {
    var rows = [];
    const datos= useSelector(state => state.stores)   
    
    useEffect( () => {
      if (datos.hasOwnProperty('search')){
      console.log("soy un debugger")
      datos.stores.search.business.map((store, key)=>{
        rows.push(<Card  />)
      })
    }},[])
    
    
    console.log(datos)
  
  return ( 
      <div>
        <h2>Resultados</h2>
        {rows}
        </div>
     )
}
 
export default CardList;