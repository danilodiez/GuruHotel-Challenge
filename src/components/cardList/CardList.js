import Card from '../cards/Card'


const CardList = () => {
    var rows = [];
    
    for (var i = 0; i < 10; i++) {
        rows.push(<Card key={i} />);
    }
    
  
  
  return ( 
      <div>
        {rows}
        </div>
     )
}
 
export default CardList;