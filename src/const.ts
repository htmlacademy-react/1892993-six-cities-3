const Setting = {
  rentalOffers: 5
};

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

export {Setting, AppRoute, AuthorizationStatus};
