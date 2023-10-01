import { lazy, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { useTheme } from './Hooks/useTheme';

import { AppWrapper } from './App.styled';
import { GlobalStyle } from './components/GlobalStyles/GlobalStyles.styled';

import { ROUTES } from './Routes/Routes';
import { RestrictedRoute } from './Routes/RestrictedRouts';
import { PrivateRoute } from './Routes/PrivateRoute';

import {
  selectIsLoadingUser,
  selectIsRefreshing,
} from './redux/auth/authSelectors';
import { fetchCurrentUser } from './redux/auth/authOperations';
import { selectRoutePath } from './redux/route/routeSelectors';

import { Loading } from './components/Loading/Loading';

import SharedLayout from './components/SharedLayout/SharedLayout';
import StartPage from './pages/WelcomePages/StartPage/StartPage';
import RegistrationPage from './pages/WelcomePages/RegistrationPage/RegistrationPage';
import SignInPage from './pages/WelcomePages/SignInPage/SignInPage';

const HomePages = lazy(() => import('./pages/HomePage/HomePage'));
const DrinksPages = lazy(() => import('./pages/DrinksPages/DrinksPages'));
const AboutDrinkPages = lazy(() =>
  import('./pages/AboutDrinkPages/AboutDrinkPages'),
);
const AddDrinkPages = lazy(() => import('./pages/AddDrinkPages/AddDrinkPages'));
const MyDrinksPages = lazy(() => import('./pages/MyDrinksPages/MyDrinksPages'));
const FavoritesPages = lazy(() =>
  import('./pages/FavoritesPages/FavoritesPages'),
);
const { DropDown } = lazy(() =>
  import('./components/Modals/DropDown/DropDown'),
);
const ErrorPages = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage/TermsOfServicePage'))

function App() {
  const routeActual = useSelector(selectRoutePath);
  const navigate = useNavigate();
  const isLoadingUser = useSelector(selectIsLoadingUser);
  // const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useTheme();

  useEffect(() => {
    dispatch(fetchCurrentUser());
    navigate(routeActual);
  }, [dispatch]);

  return (
    <AppWrapper>
      <GlobalStyle />
      <ToastContainer theme="dark" />
      {isLoadingUser && <Loading />}
      {/* {isRefreshing && <Loading />} */}
      <Routes>
        <Route path="/start" element={<StartPage />} />
        <Route
          path={ROUTES.REGISTRATION}
          element={
            <RestrictedRoute
              redirectTo={ROUTES.HOME}
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path={ROUTES.LOGIN}
          element={
            <RestrictedRoute
              redirectTo={ROUTES.HOME}
              component={<SignInPage />}
            />
          }
        />

        <Route path={ROUTES.HOME} element={<SharedLayout />}>
          <Route
            index
            element={
              <PrivateRoute
                component={<HomePages />}
                redirectTo={ROUTES.LOGIN}
              />
            }
          />

          <Route
            path={ROUTES.DRINKS}
            element={
              <PrivateRoute
                component={<DrinksPages />}
                redirectTo={ROUTES.LOGIN}
              />
            }
          />

          <Route
            path={ROUTES.ABOUTDRINK}
            element={
              <PrivateRoute
                component={<AboutDrinkPages />}
                redirectTo={ROUTES.LOGIN}
              />
            }
          />

          <Route
            path={ROUTES.ADDDRINK}
            element={
              <PrivateRoute
                component={<AddDrinkPages />}
                redirectTo={ROUTES.LOGIN}
              />
            }
          />

          <Route
            path={ROUTES.MYDRINKS}
            element={
              <PrivateRoute
                component={<MyDrinksPages />}
                redirectTo={ROUTES.LOGIN}
              />
            }
          />

          <Route
            path={ROUTES.FAVORITE}
            element={
              <PrivateRoute
                component={<FavoritesPages />}
                redirectTo={ROUTES.LOGIN}
              />
            }
          />

          <Route
            path={ROUTES.DROPDOWN}
            element={
              <PrivateRoute
                component={<DropDown />}
                redirectTo={ROUTES.LOGIN}
              />
            }
          />
          <Route path={ROUTES.POLICY} element={<PrivacyPolicyPage />} />
          <Route path={ROUTES.SERVICE} element={<TermsOfServicePage />} />
          <Route path={ROUTES.ERROR} element={<ErrorPages />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
