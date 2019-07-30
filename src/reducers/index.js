import { combineReducers } from 'redux';
import citasReducer from './citasReducer';
import errorReducer from './errorReducer';

export default combineReducers({ //pasa los nuevos estados a store
   citas: citasReducer,
   error: errorReducer
});