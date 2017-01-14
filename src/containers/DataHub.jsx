import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import { NavBar } from 'components';

const DataHub = ({title}) => {
  return (
    <div className="data-hub">
      <NavBar />
      {title}
    </div>
  );
};

const mapStateToProps = store => ({
  title: store.hello.title
});

const mapDispatchToProps = dispatch => ({
  helloWorld: () => dispatch(actions.helloWorld())
});

export default connect(mapStateToProps, mapDispatchToProps)(DataHub);
