import { useSelector } from 'react-redux';
import {
  // selectIsFetchingCurrent,
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';
import { ROUTES } from './Routes';

export const PrivateRoute = ({
  component: Component,
  redirectTo = ROUTES.START,
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
