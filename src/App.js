import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';

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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
