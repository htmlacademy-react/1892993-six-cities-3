import { useState } from 'react';
import Logo from '../../components/logo/logo';
import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types/offer';
import OffersList from '../../components/offers-list/offers-list';
import Map from '../../components/map/map';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { setCity } from '../../store/reducer';


import { AppRoute, CITIES } from '../../const';
import { Link } from 'react-router-dom';


function MainPage (): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  const currentOffers = offers.filter((offer) => offer.city.name === currentCity);
  const isEmpty = currentOffers.length === 0;

  const [selectedOffer, setSelectedOffer] = useState<Offer | undefined>(
    undefined
  );
  const handleListItemHover = (id: string | null) => {
    const currentOffer = offers.find((offer) => offer.id === id);

    setSelectedOffer(currentOffer);
  };


  return(
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 городов</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo/>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className={`page__main page__main--index ${isEmpty ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITIES.map((city) => (
                <li className="locations__item" key={city.name}>
                  <Link className={`locations__item-link tabs__item ${currentCity === city.name ? 'tabs__item--active' : ''}`}
                    onClick={() => {
                      dispatch(setCity(city.name));
                    }}
                    to={AppRoute.Root}
                  >
                    <span>{city.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {currentCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OffersList
                  offers={currentOffers}
                  cardClassName="cities"
                  onListItemHover={handleListItemHover}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <Map mapClassName={'cities__map'} offers={currentOffers} selectedOffer={selectedOffer} currentCity={currentCity}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
