import React from 'react';
import ReactDOM from 'react-dom/client';
import MainRouter from './MainRouter';

import ReactGA from "react-ga4";


ReactGA.initialize("G-6Z6LTEL3QZ");
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MainRouter />
);