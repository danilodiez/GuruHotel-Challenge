import Card from '../cards/Card';
import './card-list.css';
import {useSelector} from 'react-redux';


const CardList = () => {
    var rows = [];
    const datos= useSelector(state => state)   
    for (var i = 0; i < 10; i++) {
        rows.push(<Card key={i} />);
    }
    
    console.log(datos)
  
  return ( 
      <div>
        <h2>Resultados</h2>
        {rows}
        </div>
     )
}
 
export default CardList;