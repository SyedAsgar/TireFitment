import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { StoresApiActions } from './actions';
import { TiresService } from 'src/app/services/tires.service';

@Injectable()
export class TiresEffects {
  constructor(
    private actions$: Actions,
    private tiresService: TiresService
  ) { }

  loadYears$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StoresApiActions.loadYears),
      mergeMap(() => {
        return this.tiresService.getYears().pipe(
          map((years) =>
            StoresApiActions.loadYearsSuccess({ years })
          ),
          catchError((error) => {
            return of(
              StoresApiActions.onRequestFailure({
                error: error.error.detail,
                errorObj: error,
              })
            );
          })
        );
      })
    );
  });

  loadMakes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StoresApiActions.loadMakes),
      mergeMap((payload) => {
        return this.tiresService.getMakes(payload.year).pipe(
          map((makes) =>
            StoresApiActions.loadMakesSuccess({ makes })
          ),
          catchError((error) => {
            return of(
              StoresApiActions.onRequestFailure({
                error: error.error.detail,
                errorObj: error,
              })
            );
          })
        );
      })
    );
  });

  loadModels$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StoresApiActions.loadModels),
      mergeMap((payload) => {
        return this.tiresService.getModels(payload.make).pipe(
          map((models) =>
            StoresApiActions.loadModelsSuccess({ models })
          ),
          catchError((error) => {
            return of(
              StoresApiActions.onRequestFailure({
                error: error.error.detail,
                errorObj: error,
              })
            );
          })
        );
      })
    );
  });

  loadTrim$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StoresApiActions.loadTrim),
      mergeMap((payload) => {
        return this.tiresService.getTrim(payload.model).pipe(
          map((trim) =>
            StoresApiActions.loadTrimSuccess({ trim })
          ),
          catchError((error) => {
            return of(
              StoresApiActions.onRequestFailure({
                error: error.error.detail,
                errorObj: error,
              })
            );
          })
        );
      })
    );
  });


}
