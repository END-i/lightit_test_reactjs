import { Route, Switch } from 'react-router';
import { Redirect } from 'react-router-dom';

import ProductsList from 'Scenes/ProductsList';
import Details from 'Scenes/Details';
import About from 'Scenes/About';
import Profile from 'Scenes/Profile';
import Favorite from 'Scenes/Favorite';
import NotFound from 'Scenes/NotFound';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/products" />
      <Route path="/products" component={ProductsList} />
      <Route path="/details:product_id" component={Details} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/favorite" component={Favorite} />
      <Route path="/about" component={About} />
      <NotFound />
    </Switch>
  );
};

export default Routes;
