import React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';
import MainViewContainer from 'containers/MainViewContainer';
import CartViewContainer from 'containers/CartViewContainer';

const AppRouter = () => (
  <Router>
    <Stack key="root">
      <Scene key="home" component={MainViewContainer} title="Shopping App" />
      <Scene key="cart" component={CartViewContainer} title="Cart" />
    </Stack>
  </Router>
);

export default AppRouter;
