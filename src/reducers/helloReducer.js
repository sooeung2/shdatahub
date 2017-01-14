import * as types from '../constants';

const initialState = {
  title: 'Shop Heroes Data Hub'
}

const helloReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HELLO_WORLD:
      console.log('Hello World');
      break;
    default:
      console.log('Default Case...');
      return state;
  }
}

export default helloReducer;
