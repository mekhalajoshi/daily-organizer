import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import Dashboard from './Dashboard';
import store from '../store';

const Main = () => (
  <div>
    <ReduxProvider store={store}>
      <Dashboard />
    </ReduxProvider>
  </div>
);

export default Main;
