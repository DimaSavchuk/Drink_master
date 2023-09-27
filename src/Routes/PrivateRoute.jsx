import { useSelector } from 'react-redux';
import {
  selectIsFetchingCurrent,
  selectIsLoggedIn,
} from '../redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  //   const isRefreshing = useSelector(selectIsFetchingCurrent);

  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
