import {combineReducers} from 'redux' ;
import userReducer from './user';
import annonceReducer from './annonce'


const rootReducer= combineReducers({ userReducer , annonceReducer});

export default rootReducer;