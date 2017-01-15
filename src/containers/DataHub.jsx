import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import { NavBar } from 'containers';
import { Splash } from 'components';

const DataHub = ({switchContainer, children}) => {
  return (
    <div className="data-hub">
      <NavBar switchContainer={switchContainer} />
      {children}
    </div>
  );
};

const mapStateToProps = store => ({
  
});

const mapDispatchToProps = dispatch => ({
  switchContainer: container => dispatch(actions.switchContainer(container))
});

export default connect(mapStateToProps, mapDispatchToProps)(DataHub);
