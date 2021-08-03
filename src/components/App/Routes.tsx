import { Route, Switch } from 'react-router';
import { Redirect } from 'react-router-dom';

import ProductsList from 'Scenes/ProductsList';
import Details from 'Scenes/Details';
import About from 'Scenes/About';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="products" />
      <Route path="/products" component={ProductsList} />
      <Route path="/details:product_id" component={Details} />
      <Route path="/about" component={About} />
      <Redirect to="products" />
    </Switch>
  );
};

export default Routes;
