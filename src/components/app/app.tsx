import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks/store';

import { OfferId } from '../../types/offer';
import { Review } from '../../types/review';

type AppScreenProps = {
  offersId: OfferId[];
  reviews: Review[];
}


function App ({offersId, reviews}: AppScreenProps): JSX.Element {
  const stateOffers = useAppSelector((state) => state.offers);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            index
            path={AppRoute.Root}
            element={<MainPage/>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage/>}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesPage/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage offers={stateOffers} offersId={offersId} reviews={reviews} authorizationStatus={AuthorizationStatus.Auth}/>}
          />
          <Route
            path='/*'
            element={<NotFoundPage/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
