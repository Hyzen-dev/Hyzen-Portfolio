// MainRouter.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

function MainRouter() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default MainRouter;