
import './card.css';

import Detail from '../detail/Detail'
import {useState} from 'react'

const Card = (storesData) => {
    let info = storesData;
    const {location,name,phone,rating,review_count,photos, ...details} = info.storesData;

    //Flag para controlar el boton de detalles
    const [detailFlag, setDetailFlag] = useState(false);
    let detailComponent = <Detail storeDetails={details}/>

    function showDetails(){
        
        setDetailFlag(!detailFlag);
        
    }
    return ( 
        <div className="card-container">
            <h2>
                {name}
            </h2>
            <div className="card-info">
                
                <img src={photos[0]} className="card-img" alt="restaurant"/>
                
                <div className="card-text">

                    
                        
                        ⭐ {rating} 
                        <br/>
                        
                        📍 {location.address1}, {location.city}
                        
                        
                        <br/>
                        Views: {review_count} 
                        <br/>
                        Tel: {phone?phone:<>Unavailable</>}
                    
                </div>
                
                
            </div>
            {detailFlag?detailComponent:<></>}
            <button onClick={e=>showDetails()}>
                 {detailFlag?<>Hide</>:<>Show details</>}
            </button>

            
            
        </div>
     );
}
 
export default Card;