import { SWITCH_CONTAINER } from '../constants';

const initialState = {
  active: 'home'
}

const navBar = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_CONTAINER:
      return Object.assign({}, state, {
        active: action.container
      });
    default:
      return state;
  }
}

export default navBar;
