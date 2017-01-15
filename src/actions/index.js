import * as types from 'constants';

const switchContainer = container => ({
  type: types.SWITCH_CONTAINER,
  container
});

const toggleMenu = menu => ({
  type: types.TOGGLE_MENU,
  menu
});

export {
  switchContainer,
  toggleMenu
};
