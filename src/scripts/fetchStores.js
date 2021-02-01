import {fetchStoreBegin, fetchStoreSuccess, fetchStoreFailure} from '../actions/actions';

function fetchProducts(name, ubication) {
    return dispatch => {
        dispatch(fetchStoreBegin());
        let data = `
        {
            search(term: "${name}",
                    location: "${ubication}",
                    limit: 10) {
                business {
                    id
                    name
                    url
                    is_closed
                    phone
                    review_count
                    rating
                    price
                    location{
                        address1
                        city
                    }
                    hours{
                        open{
                            day
                            start
                            end
                        }
                    }
                    photos
                    reviews(limit:5){
                         
                            text
                            user{
                                name
                            }
                        
                    }
                }
            }
        }
        
        
        
            
            `

            fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/graphql", {
                method:"POST",
                headers:{ 
                    "Content-Type":"application/graphql",
                    "Accept-Language": "en_US",
                    "x-requested-with":"xmlhttprequest",
                    
                    Authorization: "Bearer Cdvlt-2usVM10kSRof4TzepoMcO84bSaJMpG53pk7qIxVhK1fisXn5GLmRsOcleJl3ekWbqh-8_RyKbbDm2phDlGCQ-9vmz7fXITpOkl9iIblxkhaSIwECo1aJAUYHYx"
                     
                    
                },
    
                body:data
        
    
            }).then(res=>res.json())
            .then(data=>{

                if(data.error){
                    throw(data.error);
                }
                dispatch(fetchStoreSuccess(data));
                return data;

                
            })
            .catch(err=>{
                dispatch(fetchStoreFailure);
            })

            }
    
}

export default fetchProducts;