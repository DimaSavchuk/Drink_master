import { Route, Routes } from 'react-router-dom';

import SharedLayout from './components/SharedLayout/SharedLayout';
import StartPage from './pages/WelcomePages/StartPage/StartPage';
import RegistrationPage from './pages/WelcomePages/RegistrationPage/RegistrationPage';
import SignInPage from './pages/WelcomePages/SignInPage/SignInPage';
import AllDrinksPages from './pages/AllDrinks/AllDrinksPages';
import DrinksPages from './pages/DrinksPages/DrinksPages';
import FavoritesPages from './pages/FavoritesPages/FavoritesPages';
import MyDrinksPages from './pages/MyDrinksPages/MyDrinksPages';
import ErrorPage from './pages/ErrorPage/ErrorPage';

import { AppWrapper } from './App.styled';
import { GlobalStyle } from './components/GlobalStyles/GlobalStyles.styled';
import { HomePage } from './pages/HomePage/HomePage';
import AddDrink from './pages/AddDrinkPages/AddDrinkPages';
import AboutDrinkPages from './pages/AboutDrinkPages/AboutDrinkPages';

const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return (
    <AppWrapper>
      <GlobalStyle />
      <Routes>
        <Route path="/start" element={<StartPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<SignInPage />} />

        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/drinks" element={<DrinksPages />} />
          <Route path="/alldrinks" element={<AllDrinksPages />} />
          <Route path="/adddrink" element={<AddDrink />} />
          <Route path="/aboutdrink" element={<AboutDrinkPages />} />
          <Route path="/mydrinks" element={<MyDrinksPages />} />
          <Route path="/favorites" element={<FavoritesPages />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
