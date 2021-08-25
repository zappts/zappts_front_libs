import React from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

// Here we are launching Google Analytics
ReactGA.initialize('UA-xxxxxxxxx-x');
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;