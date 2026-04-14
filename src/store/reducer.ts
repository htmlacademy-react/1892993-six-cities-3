import { createAction, createReducer } from '@reduxjs/toolkit';

import type { Offer } from '../types/offer';
import type { CityName } from '../const';

import { CITIES } from '../const';
import { offers } from '../mocks/offers';

type OffersState = {
  city: CityName;
  offers: Offer[];
}

const initialState: OffersState = {
  city: CITIES[0].name,
  offers,
};

const setCity = createAction<CityName>('offers/setCity');

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCity, (state, action) => {
    state.city = action.payload;
  });
});

export {reducer, setCity};

