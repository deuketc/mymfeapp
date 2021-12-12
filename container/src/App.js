import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Progress from './components/Progress';

const DashboardLazy = lazy(() => import('./components/DashboardApp'));
const ProductsLazy = lazy(() => import('./components/ProductsApp'));

export default () => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path='/dashboard' component={DashboardLazy} />
            <Route path='/' component={ProductsLazy} />
          </Switch>
        </Suspense>
      </>
    </BrowserRouter>
  );
};
