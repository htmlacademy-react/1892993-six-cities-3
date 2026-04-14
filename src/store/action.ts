import { createAction } from '@reduxjs/toolkit';
import type { CityName } from '../const';

const setCity = createAction<CityName>('offers/setCity');

export {setCity};
