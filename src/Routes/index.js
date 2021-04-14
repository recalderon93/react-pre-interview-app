import React from 'react';
import { Switch, Route } from 'react-router';
import Layout from 'Component/Module/Layout';
import CountriesList from 'Component/Prototypes/CountriesList/CountriesList';
import LandingPage from 'Component/Prototypes/LandingPage';
import SelectContinent from 'Component/Prototypes/SelectContinents/SelectContinent';

function RoutesComponent() {
  return (
    <Switch>

      <Layout>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/countriesList" component={CountriesList} />
        <Route exact path="/select" component={SelectContinent} />
        <Route exact path="/trivia" component={TriviaPage} />
      </Layout>
    </Switch>
  );
}

export default RoutesComponent;
