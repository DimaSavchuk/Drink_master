import { Route, Routes } from 'react-router-dom';

import SharedLayout from './components/SharedLayout/SharedLayout';
import StartPage from './pages/WelcomePages/StartPage/StartPage';
import RegistrationPage from './pages/WelcomePages/RegistrationPage/RegistrationPage';
import SignInPage from './pages/WelcomePages/SignInPage/SignInPage';
import DrinksPages from './pages/DrinksPages/DrinksPages';
import FavoritesPages from './pages/FavoritesPages/FavoritesPages';
import MyDrinksPages from './pages/MyDrinksPages/MyDrinksPages';
import ErrorPage from './pages/ErrorPage/ErrorPage';

import { AppWrapper } from './App.styled';
import { GlobalStyle } from './components/GlobalStyles/GlobalStyles.styled';
import { HomePage } from './pages/HomePage/HomePage';
import AddDrink from './pages/AddDrinkPages/AddDrinkPages';
import AboutDrinkPages from './pages/AboutDrinkPages/AboutDrinkPages';
import { DropDown } from './components/Modals/DropDown/DropDown';
import { ROUTES } from './Routes/Routes';
// import UserProfile from './components/Modals/UserProfile/UserProfile';
// import LogOut from './components/Modals/LogOut/LogOut';

const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return (
    <AppWrapper>
      <GlobalStyle />
      <Routes>
        <Route path="/start" element={<StartPage />} />
        <Route path={ROUTES.REGISTRATION} element={<RegistrationPage />} />
        <Route path={ROUTES.LOGIN} element={<SignInPage />} />
        <Route path={ROUTES.HOME} element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.DRINKS} element={<DrinksPages />} />
          <Route path={ROUTES.ABOUTDRINK} element={<AboutDrinkPages />} />
          <Route path={ROUTES.ADDDRINK} element={<AddDrink />} />
          <Route path={ROUTES.MYDRINKS} element={<MyDrinksPages />} />
          <Route path={ROUTES.FAVORITE} element={<FavoritesPages />} />

          {/* Тимчасові роути */}

          {/* <Route path="/dropdown" element={<DropDown />}>
            <Route path="profile" element={<UserProfile />} />
            <Route path="logout" element={<LogOut />} />
          </Route> */}

          <Route path="/dropdown" element={<DropDown />} />
          {/* Тимчасові роути */}
          <Route path={ROUTES.ERROR} element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
