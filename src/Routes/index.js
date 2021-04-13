import CountriesList from 'Component/Prototypes/CountriesList/CountriesList';
import LandingPage from 'Component/Prototypes/LandingPage';
import SelectContinent from 'Component/Prototypes/SelectContinents/SelectContinent';
import React from 'react';
import { Switch, Route } from 'react-router';

function RoutesComponent() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/countriesList" component={CountriesList} />
      <Route exact path="/select" component={SelectContinent} />
    </Switch>
  );
}

export default RoutesComponent;
