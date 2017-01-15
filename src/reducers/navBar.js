import { SWITCH_CONTAINER } from '../constants';

const initialState = {
  active: 'home-link'
}

const navBar = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_CONTAINER:
      const containerId = action.container;
      document.getElementById(state.active).classList.remove('active');
      document.getElementById(containerId).classList.add('active');
      return Object.assign({}, state, {
        active: containerId
      });
    default:
      return state;
  }
}

export default navBar;
