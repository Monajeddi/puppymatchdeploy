import {FAIL_USER, LOAD_USER, SIGNUP_USER, SIGNIN_USER, LOGOUT_USER , CURRENT_USER, UPLOAD_PICTURE, UPLOAD_ERROR} from '../actionTypes/user';
import axios from "axios";


export const signUp = (newUser, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    console.log(history);
    try {
      const result = await axios.post("/api/user/signup", newUser);
  
      dispatch({ type: SIGNUP_USER, payload: result.data }); 
      history.push("/Profil");
    } catch (error) {
      console.log(error.response.data.errorrs);
      
      dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
  };

  // export const signIn = (user, history) => async (dispatch) => {
  //   dispatch({ type: LOAD_USER });
  //   console.log(history);
  //   try {
  //     const result = await axios.post("/api/user/signin", user);
  //     dispatch({ type: SIGNIN_USER, payload: result.data }); 
  //     history.push("/Profile");
  //   } catch (error) {
     
  //     dispatch({ type: FAIL_USER, payload: error.response.data.errors });
  //   }
  // };

  export const signIn = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
  
    try {
      const result = await axios.post("/api/user/signin", user);
      dispatch({ type: SIGNIN_USER, payload: result?.data }); //msg /token , user
      history.push("/Profil");
      console.log(user)
    } catch (error) {
      // error.response.data.errors.map((el) =>
      //   setTimeout(function () {
      //     alert(el.msg);
      //   }, 3000)
      // );
      dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
  };

  export const logout = () => {
    return {
      type: LOGOUT_USER,
    };
  };

  export const currentUser = () => async (dispatch) => {
    try {
      const options = {
        headers: { Authorization: localStorage.getItem("token") },
      };
      const result = await axios.get("/api/user/current", options);
      dispatch({ type: CURRENT_USER, payload: result.data });
    } catch (error) {
      dispatch({ type: FAIL_USER, payload: error.response.data });
    }
  };

  export const videErrors = () => {
    return {
      type: "VIDE_ERRORS",
    };
  };

  export const uploadPicture = (data, id) => {
    return (dispatch) => {
      return axios
        .post("/api/user/upload", data)
        .then((res) => {
          if (res.data.errors) {
            dispatch({ type: UPLOAD_ERROR, payload: res.data.errors });
          } else {
            return axios
              .get(`/api/user/${id}`)
              .then((res) => {
                dispatch({ type: UPLOAD_PICTURE, payload: res.data.picture });
              });
          }
        })
        .catch((err) => console.log(err));
    };
  };