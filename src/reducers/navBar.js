import { SWITCH_CONTAINER, TOGGLE_MENU } from 'constants';

const initialState = {
  active: 'home',
  menu: false
};

const navBar = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_CONTAINER:
      return Object.assign({}, state, {
        active: action.container
      });
    case TOGGLE_MENU:
      return Object.assign({}, state, {
        menu: action.menu ? false : true
      });
    default:
      return state;
  };
};

export default navBar;
