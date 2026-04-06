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
const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

export {AppRoute, AuthorizationStatus, factor, percent, CITIES};
