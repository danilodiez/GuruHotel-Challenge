
import './card.css';
import pizzaImg from './pizza.jpg';
import Detail from '../detail/Detail'
import {useState} from 'react'

const Card = (storesData) => {
    let info = storesData
    const {location,name,phone,rating,review_count,photos, ...details} = info.storesData;

    const [detailFlag, setDetailFlag] = useState(false)
    let detailComponent=<Detail storeDetails={details}/>

    function showDetails(){
        console.log("holi")
        setDetailFlag(!detailFlag)
        
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
            <button onClick={e=>showDetails()}>
                Ver {detailFlag?<>menos</>:<>mas</>}
            </button>

            <div className="view-already">
                {vista?<>👁️</>:<></>}
            </div>
            {detailFlag?detailComponent:<></>}
        </div>
     );
}
 
export default Card;