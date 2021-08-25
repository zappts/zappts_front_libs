import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Switch, useLocation } from 'react-router-dom';

import Route from './Route';

import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';

const Routes: React.FC = () => {
  const { pathname } = useLocation();

  // Here we're monitoring when the route changes to launch the pageview event
  useEffect(() => {
    ReactGA.pageview(pathname);
  }, [pathname]);

  return (
    <Switch>
      <Route path="/" exact component={Page1} />
      <Route path="/page2" component={Page2} />
    </Switch>
  );
};

export default Routes;