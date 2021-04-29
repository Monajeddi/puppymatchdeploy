import { FAIL_USER, LOAD_USER, LOGOUT_USER, SIGNIN_USER, SIGNUP_USER , CURRENT_USER, UPLOAD_PICTURE, UPLOAD_ERROR} from "../actionTypes/user";



const initialState = {
    user: null,
    isAuth: false,
    loadUser: false,
    errors: [],
  };

  const userReducer=(state=initialState,{type,payload})=>{
      switch (type) {
          case LOAD_USER: 
            return{...state,loadUser: true};
          case SIGNUP_USER: 
            localStorage.setItem("token", payload.token)
            return{...state,user:payload.user, isAuth: true, loadUser: false, errors: []};
          case SIGNIN_USER:
              localStorage.setItem("token", payload.token);
              return {
                ...state,
                loadUser: false,
                user: payload.user,
                isAuth: true,
                errors: [],
              };
          case LOGOUT_USER:
              localStorage.removeItem("token")
              return{user: {}, isAuth: false, loadUser: false, errors: []};
          case FAIL_USER:
              return{...state, errors:payload, loadUser: false};
          case CURRENT_USER:
              return{...state,loadUser: false, user: payload, isAuth: true, errors: []};
          case UPLOAD_PICTURE:
                return {
                  ...state,
                  picture: payload.picture,
                };
          

      
          default:
              return state;
      }
  };

export default userReducer;