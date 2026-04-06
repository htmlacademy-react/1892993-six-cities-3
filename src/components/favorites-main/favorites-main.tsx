import { Offer } from '../../types/offer';
import OffersList from '../offers-list/offers-list';

type FavoritesMainProps = {
  offers: Offer[];
}

function groupOffersByCity(offers: Offer[]): Record<string, Offer[]> {
  return offers.reduce<Record<string, Offer[]>>((groupOffers, offer) => {
    const cityName = offer.city.name;
    if (!groupOffers[cityName]) {
      groupOffers[cityName] = [];
    }
    groupOffers[cityName].push(offer);
    return groupOffers;
  }, {});
}

function FavoritesMain({offers}: FavoritesMainProps): JSX.Element {
  const groupOffers = groupOffersByCity(offers);
  const groupFavoriteOffers = Object.entries(groupOffers);
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {groupFavoriteOffers.map(([cityName, cityOffers]) => (
              <li className="favorites__locations-items" key={cityName}>
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#todo">
                      <span>{cityName}</span>
                    </a>
                  </div>
                </div>

                <div className="favorites__places">
                  <OffersList offers={cityOffers} cardClassName="favorites" />
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesMain;
