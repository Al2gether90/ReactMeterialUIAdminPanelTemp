import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import PublicRoute from 'routes/PublicRoute';

import Marketplace from 'containers/Marketplace';
import ProfilePage from "./containers/Profile";
import ProductsPage from "./containers/Products";
import DisputesPage from "./containers/Disputes";
import ProductDetailPage from "./containers/ProductDetail";
import OrdersPage from "./containers/Orders";
import DisputeDetailPage from "./containers/DisputeDetail";
import NotFound from 'containers/NotFound';

const App = (props) => (
  <SnackbarProvider maxSnack={3}>
    <Switch>
      <Route exact path="/">
        <Redirect to="/marketplace" />
      </Route>

      <PublicRoute
        exact
        path="/marketplace"
        component={Marketplace}
        props={props}
      />

      <PublicRoute
        exact
        path="/products"
        component={ProductsPage}
        props={props}
      />

      <PublicRoute
        exact
        path="/products/:id"
        component={ProductDetailPage}
        props={props}
      />

      <PublicRoute
        exact
        path="/orders"
        component={OrdersPage}
        props={props}
      />

      <PublicRoute
        exact
        path="/disputes"
        component={DisputesPage}
        props={props}
      />

      <PublicRoute
        exact
        path="/disputes/:id"
        component={DisputeDetailPage}
        props={props}
      />

      <PublicRoute
        exact
        path="/profile"
        component={ProfilePage}
        props={props}
      />

      <Route component={NotFound} />
    </Switch>
  </SnackbarProvider>
);

export default withRouter(App);
