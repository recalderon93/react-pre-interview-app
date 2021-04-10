import Loader from 'Component/Elements/Loader/loader';
import LandingPage from 'Component/Prototypes/LandingPage';
import React from 'react';
import { Switch, Route } from 'react-router';

function RoutesComponent() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
    </Switch>
  );
}

export default RoutesComponent;
