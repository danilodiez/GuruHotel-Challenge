


const Detail = (storeDetail) => {
    console.log(storeDetail)
    const {hours,id,is_closed,price,reviews,url} = storeDetail
    /*Para el parseo de los dias desde la Api uso un arreglo en el que el indice corresponde a cada dia de la semana*/
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    let highlights;
    
    let attentionHours;

    return ( 
        <div className="detail-container">
            {is_closed?<>Permanently closed <br/></>:<></>}
            
            Open at:
            <br/>{}

            Prices:
            <br/>
            <b>Review Highlights</b>
        </div>
     );
}
 
export default Detail;