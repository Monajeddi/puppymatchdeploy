import {UPLOAD_PICTURE,  UPLOAD_ERROR } from '../actionTypes/user';
import { ANNONCE_LOAD, ANNONCE_SUCCESS, ANNONCE_FAIL, GET_ANNONCE, TOGGLE_TRUE, TOGGLE_FALSE} from '../actionTypes/annonce';
import axios from 'axios';

// get annonces
export const getAnnonces = () => async (dispatch) => {
  dispatch({ type: ANNONCE_LOAD })
  try {
      const res = await axios.get("/api/annonces/")
      dispatch({
          type: ANNONCE_SUCCESS,
          payload: res.data.listAnnonces
      })
  } catch (error) {
      dispatch({
          type: ANNONCE_FAIL,
          payload: error
      })
      console.log(error)
  }
}

// add new annonce
export const addAnnonce = (newAnnonce) => async (dispatch) => {
  try {
      await axios.post("/api/annonces/", newAnnonce)
      dispatch(getAnnonces())
  } catch (error) {
      console.log(error)
  }
}

// edit annonce
export const editAnnonce = (AnnonceId, newAnnonce) => async (dispatch) => {
  try {
      await axios.put(`/api/annonces/${AnnonceId}`, newAnnonce)
      dispatch(getAnnonces())
  } catch (error) {
      console.log(error)
  }
}

// get one contact by id
export const getAnnonce = (AnnonceId) => async (dispatch) => {
  try {
      const res = await axios.get(`/api/annonces/${AnnonceId}`)
      dispatch({ type: GET_ANNONCE, payload: res.data })
      console.log(res.data.annonceToFind)
  } catch (error) {
      console.log(error)
  }
}

// Toggle true
export const toggleTrue = () => {
  return {
    type: TOGGLE_TRUE
  }
}

// Toggle false
export const toggleFalse = () => {
  return {
      type: TOGGLE_FALSE
  }
}


// upload picture 
export const uploadPicture = (data, id) => {
    return (dispatch) => {
      return axios
        .post("/api/annonces/upload", data)
        .then((res) => {
          if (res.data.errors) {
            dispatch({ type: UPLOAD_ERROR, payload: res.data.errors });
          } else {
            return axios
              .get(`/api/annonces/${id}`)
              .then((res) => {
                dispatch({ type: UPLOAD_PICTURE, payload: res.data.picture });
              });
          }
        })
        .catch((err) => console.log(err));
    };
  };


  // delete annonce
export const deleteAnnonce = (_id) => async (dispatch) => {
  try {
      await axios.delete(`/api/annonces/${_id}`)
      dispatch(getAnnonces())
  } catch (error) {
      console.log(error)
  }
}

