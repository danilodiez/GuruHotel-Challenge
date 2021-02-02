import {
    FETCH_STORE_BEGIN,
    FETCH_STORE_SUCCESS,
    FETCH_STORE_FAILURE
  } from '../actions/actions';
  
  const initialState = {
    stores: [],
    loading: false,
    error: null
  };
  
  export default function storeReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_STORE_BEGIN:
        // Marcamos el estado como loading para poder mostrar un spinner

        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_STORE_SUCCESS:
        // Obtenemos los datos de la API y los colocamos en el store
        return {
          ...state,
          loading: false,
          stores: action.stores
        };
    
      case FETCH_STORE_FAILURE:
        // Algun error en la peticion
        
        return {
          ...state,
          loading: false,
          error: action.error,
          stores: []
        };
  
      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }