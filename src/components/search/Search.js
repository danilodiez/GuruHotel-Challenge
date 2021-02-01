import './search.css'
import {useEffect} from 'react'




const SearchBox = () => {
    let data = `
    {
        search(term: "burrito",
                location: "san francisco",
                limit: 5) {
            total
            business {
                name
                url
            }
        }
    }
    
        
        `


    function search(){
        console.log("3")
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
            console.log(data)
        })
        .catch(err=>console.log(err))
        }

   
  





    return ( <div className="search-box">
        <input id="store-name" className="search-input" placeholder="🔎 Qué estás buscando?">
        </input>
        <input id="ubication" className="search-input" placeholder="🌎 Dónde estás?">
        </input>
        <button>
        <b id="searchButton" onClick={()=>{search()}}>Buscar </b>
        </button>

    </div> );
}
 
export default SearchBox;