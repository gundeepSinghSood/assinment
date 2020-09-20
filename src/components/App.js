import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import CircularProgress from '@material-ui/core/CircularProgress';

import Head from './atoms/Head';

// aomts
import Header from './atoms/Header';

const LoadableHome = Loadable({
  loader: () => import('./templates/Home'),
  loading: () => <CircularProgress />
});

const App = () => (
  <div className="app" style={{ backgroundColor: '#f1f2f3' }}>
    <Head />
    <Header />
    <main className="main">
      <Switch>
        <Route path="/" component={LoadableHome} />
      </Switch>
    </main>
    <footer>Developed by Rishav</footer>
  </div>
);

export default App;
