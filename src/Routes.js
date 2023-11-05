import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Beers from './components/Beers';
import BeerDetail from './components/BeerDetail';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/beers" component={Beers} />
        <Route path="/beers/:beerId" component={BeerDetail} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} />
      </Switch>
    </Router>
  );
}

export default Routes;
