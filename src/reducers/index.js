import { combineReducers } from 'redux';
import helloReducer from './helloReducer';

const reducers = combineReducers({
  hello: helloReducer
});

export default reducers;
