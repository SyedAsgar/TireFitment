import { createFeatureSelector, createSelector } from '@ngrx/store';
import ITiresStateSlice from 'src/app/models/interfaces/tires-state-slice';
import * as AppState from '../app.state';

// Extends App State
export interface State extends AppState.State {
  tires: ITiresStateSlice;
}

// Get Store Slice
const getTiresFeatureState = createFeatureSelector<ITiresStateSlice>(
  'tires'
);

// Actions To Get Data From Slice

export const getYears = createSelector(
  getTiresFeatureState,
  (state) => state.years
);

export const getMakes = createSelector(
  getTiresFeatureState,
  (state) => state.makes
);

export const getModels = createSelector(
  getTiresFeatureState,
  (state) => state.models
);

export const getTrim = createSelector(
  getTiresFeatureState,
  (state) => state.trim
);
