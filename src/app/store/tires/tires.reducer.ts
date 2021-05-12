import { loadMakesSuccess, loadTrimSuccess } from './actions/stores-api.actions';
import ITiresStateSlice from 'src/app/models/interfaces/tires-state-slice';
import { on, createReducer } from '@ngrx/store';
import { StoresApiActions, StoresPageActions } from './actions';

const initialState: ITiresStateSlice = {
  years: null,
  makes: null,
  models: null,
  trim: null,
  error: '',
  errorObj: null,
};

export const tiresReducer = createReducer<ITiresStateSlice>(
  initialState,
  on(StoresApiActions.loadYearsSuccess, (state, action): ITiresStateSlice => {
    return {
      ...state,
      years: action.years
    };
  }),

  on(StoresApiActions.loadMakesSuccess, (state, action): ITiresStateSlice => {
    return {
      ...state,
      makes: action.makes
    };
  }),

  on(StoresApiActions.loadModelsSuccess, (state, action): ITiresStateSlice => {
    return {
      ...state,
      models: action.models
    };
  }),

  on(StoresApiActions.loadTrimSuccess, (state, action): ITiresStateSlice => {
    return {
      ...state,
      trim: action.trim
    };
  }),

  on(StoresApiActions.onRequestFailure, (state, action): ITiresStateSlice => {
    return {
      ...state,
      error: action.error,
      errorObj: action.errorObj
    };
  }),

);
