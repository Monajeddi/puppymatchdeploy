
import {ANNONCE_SUCCESS, ANNONCE_LOAD, ANNONCE_FAIL, GET_ANNONCE, TOGGLE_TRUE, TOGGLE_FALSE } from '../actionTypes/annonce'



const initialState = {
    annonces: [],
    errors: [],
    isLoading : false,
    annonce: {},
    isEdit: false
  };

  const annonceReducer=(state=initialState,{type,payload})=>{
    switch (type) {
      case ANNONCE_LOAD: return {
          ...state,
          isLoading: true
      }
      case ANNONCE_SUCCESS: return {
          ...state,
          annonces: payload,
          isLoading: false
      }
      case ANNONCE_FAIL: return {
          ...state,
          errors: payload,
          isLoading: false
      }
      
      case GET_ANNONCE: return {
          ...state,
          annonce: payload.annonceToFind
      }
      case TOGGLE_TRUE: return {
        ...state,
        isEdit: true

      }
      case TOGGLE_FALSE: return {
        ...state,
        isEdit: false
    }

      default: return state
  }

}

export default annonceReducer;