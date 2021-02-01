
import './card.css';
import pizzaImg from './pizza.jpg';



const Card = () => {
    let info = {
        nombre: "Las pizzas rusticas",
        ubicacion: "Saladas, Corrientes",
        puntuacion:5,
        vistas:1000,
        telefono:54375231351,
        vista:true

    }

    const {nombre, ubicacion, puntuacion, vistas, telefono, vista} = info
    
    return ( 
        <div className="card-container">
            <h2>
                {nombre}
            </h2>
            <div className="card-info">
                
                <img src={pizzaImg} className="card-img"/>
                
                <div className="card-text">

                    
                        ⭐⭐⭐⭐
                        <br/>
                        
                        📍 {ubicacion}
                        
                        
                        <br/>
                        Vistas: {vistas} 
                        <br/>
                        {telefono}
                    
                </div>
                {/*Aca disponemos si la tienda ya fue seleccionada*/}
                
            </div>
            <button>
                Ver más
            </button>

            <div className="view-already">
                {vista?<>👁️</>:<></>}
            </div>
        </div>
     );
}
 
export default Card;