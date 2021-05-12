import { createAction, props } from '@ngrx/store';


// Years
export const loadYears = createAction(
  '[Tires Module] [Api] Load List Of Years',
);

export const loadYearsSuccess = createAction(
  '[Tires Module] [Api] Load List Of Years Success',
  props<{ years: any }>()
);

// Makes
export const loadMakes = createAction(
  '[Tires Module] [Api] Load List Of Makes',
  props<{ year: any }>()
);

export const loadMakesSuccess = createAction(
  '[Tires Module] [Api] Load List Of Makes Success',
  props<{ makes: any }>()
);

// Models
export const loadModels = createAction(
  '[Tires Module] [Api] Load List Of Models',
  props<{ make: any }>()
);

export const loadModelsSuccess = createAction(
  '[Tires Module] [Api] Load List Of Models Success',
  props<{ models: any }>()
);

// Trim
export const loadTrim = createAction(
  '[Tires Module] [Api] Load List Of Trim',
  props<{ model: any }>()
);

export const loadTrimSuccess = createAction(
  '[Tires Module] [Api] Load List Of Trim Success',
  props<{ trim: any }>()
);


// Request Failure
export const onRequestFailure = createAction(
  'Request Failure',
  props<{ error: string; errorObj: any }>()
);
