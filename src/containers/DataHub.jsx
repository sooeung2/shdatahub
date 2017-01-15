import React from 'react';
import { connect } from 'react-redux';
import { NavBar } from 'containers';
import { Splash } from 'components';

const DataHub = ({children}) => {
  return (
    <div className="data-hub">
      <NavBar />
      {children}
    </div>
  );
};

const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(DataHub);
