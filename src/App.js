import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Resources from './pages/Resources';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profiles/:geoId" component={Profile} />
        <Route
          exact
          path="/compare/:geoId/vs/:comparisonGeoId"
          component={Profile}
        />
        <Route exact path="/resources" component={Resources} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
