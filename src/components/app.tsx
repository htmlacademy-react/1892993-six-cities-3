import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MainPage from '../pages/main-page';
import FavoritesPage from '../pages/favorites-page';
import OfferPage from '../pages/offer-page';
import LoginPage from '../pages/login-page';
import { AppRoute } from '../const';

type AppScreenProps = {
  rentalOffers: number;
}

function App ({rentalOffers}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage rentalOffers = {rentalOffers}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={<FavoritesPage/>}
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
