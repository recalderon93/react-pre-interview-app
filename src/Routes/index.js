import React from 'react';
import { Switch, Route } from 'react-router';
import Layout from 'Component/Module/Layout';
import CountriesList from 'Component/Prototypes/CountriesList/CountriesList';
import LandingPage from 'Component/Prototypes/LandingPage';
import SelectContinent from 'Component/Prototypes/SelectContinents/SelectContinent';
import TriviaPage from 'Component/Prototypes/TriviaPage/TriviaPage';
import CONSTANTS from 'Utils/Constants';

function RoutesComponent() {
  const { ROUTES } = CONSTANTS;
  return (
    <Switch>

      <Layout>
        <Route exact path={ROUTES.LOGIN} component={LandingPage} />
        <Route exact path="/react-pre-interview-app" component={LandingPage} />
        <Route exact path={ROUTES.COUNTRIES_LIST} component={CountriesList} />
        <Route exact path={ROUTES.SELECT_CONTINENTS} component={SelectContinent} />
        <Route exact path={ROUTES.TRIVIA} component={TriviaPage} />
      </Layout>
    </Switch>
  );
}

export default RoutesComponent;
