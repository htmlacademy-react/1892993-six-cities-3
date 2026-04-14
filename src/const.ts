import { City } from './types/city';

const percent = '%';
const factor = 20;


enum AppRoute {
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Login = '/login',
  Root = '/',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const CITIES: City[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 10,
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 10,
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 10,
    },
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 10,
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 10,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 10,
    },
  },
];

export type CityName = (typeof CITIES)[number]['name'];

const MARKERS = {
  URL_MARKER_DEFAULT: '/markup/img/pin.svg',
  URL_MARKER_ACTIVE: '/markup/img/pin-active.svg',
} as const;

const SORT_OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

const enum SortOption {
  Popular = 0,
  PriceLowToHigh = 1,
  PriceHighToLow = 2,
  TopRatedFirst = 3
}

export {AppRoute, AuthorizationStatus, factor, percent, CITIES, MARKERS, SORT_OPTIONS, SortOption};
