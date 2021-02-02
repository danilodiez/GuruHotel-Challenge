import './detail.css';

const parseHours = (text)=>{
    //Con este metodo agrego ":" a las horas
    let position = text.length-2;
    let output = [text.slice(0, position), ":", text.slice(position)].join('');
    return output
}


const Detail = (storeDetail) => {
    const {hours,id,is_closed,price,reviews,url} = storeDetail.storeDetails;
    /*Para el parseo de los dias desde la Api uso un arreglo en el que el indice corresponde a cada dia de la semana*/
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


     /*
        DIV de las reseñas de los clientes
        */ 
    let highlights = <div className="reviews">
        {reviews.map((item, key)=>{
            return <div key={key}>
            <p>
            "{item.text}"
            </p>
            <div className="user">
                - {item.user.name}
            </div>
            <br/>
            </div>
        })}
    </div>;
    
        /*
        DIV de los horarios de atencion
        */ 
    let attentionHours = <div>
        {hours[0].open.map((attentionItem, key)=>{
            return <p key={key}>
            {days[attentionItem.day]}: {parseHours(attentionItem.start)} - {parseHours(attentionItem.end)} <br/>
            </p>
        })}
    </div>;

    return ( 
        <div className="detail-container">
            {is_closed?<>Permanently closed <br/></>:<>
            <b>Open at</b>
            <br/>{attentionHours}
            </>}
            
            
            <br/>
            Price Level: {price?price:<>Unavailable</>}
            <br/><br/>
            <b>Review Highlights</b>
            
            {highlights}
        </div>
     );
}
 
export default Detail;