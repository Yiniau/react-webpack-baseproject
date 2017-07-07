import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';
import config from './config';


// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
      <route.component {...props} config={route.routes || null}/>
  )}/>
)

const Routes = () => (
  <div>
    // <Redirect from='/' to='/login'/>
    {config.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route}/>
    ))}
  </div>
)

export default Routes;
