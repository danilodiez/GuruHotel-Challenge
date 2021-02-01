import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from '../actions/actions';

function fetchProducts(name, ubication) {
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch('https://exampleapi.com/products')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchProductsSuccess(res.products));
            return res.products;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        })
    }
}


/*
QUERY PARA GRAPHQL
{
    "query": "business(id: $business_name) {
        name
        id
        rating
        url
    }",
    "variables": {
        "business_name": "garaje-san-francisco"
    }
}


fetch('https://api.yelp.com/v3/graphql',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'},
    body:JSON.stringify({
        query
    })
    }

}).then(res.json())
.then(data=>{
    console.log(data)
})
.catch(err=>console.log(err))

*/



export default fetchProducts;