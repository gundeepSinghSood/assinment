import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

import App from './components/App';
import { ServerDataProvider } from './state/serverDataContext';

import ErrorBoundary from '../src/components/atoms/ErrorBoundary';

import './styles/index.scss';

const serverData = window.__SERVER_DATA__;

export const main = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(
      <ErrorBoundary>
        <ServerDataProvider value={serverData}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ServerDataProvider>
      </ErrorBoundary>,
      document.getElementById('root')
    );
  });
};
