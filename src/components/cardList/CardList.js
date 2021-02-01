import Card from '../cards/Card'
import './card-list.css'

const CardList = () => {
    var rows = [];
    
    for (var i = 0; i < 10; i++) {
        rows.push(<Card key={i} />);
    }
    
  
  
  return ( 
      <div>
        <h2>Resultados</h2>
        {rows}
        </div>
     )
}
 
export default CardList;