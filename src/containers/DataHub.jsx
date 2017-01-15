import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import { NavBar } from 'containers';
import { Splash } from 'components';

const DataHub = ({active, switchContainer, children}) => {
  return (
    <div className="data-hub">
      <NavBar active={active} switchContainer={switchContainer} />
      {children}
    </div>
  );
};

const mapStateToProps = store => ({
  active: store.navBar.active
});

const mapDispatchToProps = dispatch => ({
  switchContainer: container => dispatch(actions.switchContainer(container))
});

export default connect(mapStateToProps, mapDispatchToProps)(DataHub);
