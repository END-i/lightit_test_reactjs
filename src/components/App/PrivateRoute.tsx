import { Route, RouteComponentProps } from 'react-router-dom';

import { useStore } from 'context';
import NotFound from 'Scenes/NotFound';

interface Props {
  component: (props: RouteComponentProps) => JSX.Element;
  path: string;
}
const PrivateRoute = ({ component: Component, ...rest }: Props) => {
  const { token } = useStore();

  return <Route {...rest} render={(props) => (token ? <Component {...props} /> : <NotFound />)} />;
};

export default PrivateRoute;
