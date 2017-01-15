import React from 'react';
import { Route, Link, IndexRoute } from 'react-router';

/**
 * Import containers and components
 */
import { DataHub } from 'containers';
import { Splash } from 'components';

const routes = (
  <Route path="/" component={DataHub}>
    <IndexRoute component={Splash} />
    <Route path="/items" component={Splash} />
    <Route path="/workers" component={Splash} />
    <Route path="/heroes" component={Splash} />
    <Route path="/buildings" component={Splash} />
  </Route>
);

export default routes;
