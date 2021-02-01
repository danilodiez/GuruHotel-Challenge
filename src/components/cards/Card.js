
import './card.css';
import pizzaImg from './pizza.jpg';
import Detail from '../detail/Detail'


const Card = (storesData) => {
    let info = storesData
    const {hours,id,is_closed,location,name,phone,price,rating,review_count,reviews,url,photos} = info.storesData;
    let detailFlag=false;
    
    let detailComponent=<Detail storeInfo={info.storesData}/>

    function showDetails(){
        return !detailFlag
    }

    let vista=false;
    return ( 
        <div className="card-container">
            <h2>
                {name}
            </h2>
            <div className="card-info">
                
                <img src={photos[0]} className="card-img"/>
                
                <div className="card-text">

                    
                        Rating: {rating} stars
                        <br/>
                        
                        📍 {location.address1}, {location.city}
                        
                        
                        <br/>
                        Views: {review_count} 
                        <br/>
                        Tel: {phone}
                    
                </div>
                {/*Aca disponemos si la tienda ya fue seleccionada*/}
                
            </div>
            <button onClick={showDetails()}>
                Ver {detailFlag?<>más</>:<>menos</>}
            </button>

            <div className="view-already">
                {vista?<>👁️</>:<></>}
            </div>
            {detailFlag?detailComponent:<></>}
        </div>
     );
}
 
export default Card;