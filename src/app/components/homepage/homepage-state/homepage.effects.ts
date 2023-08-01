import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { loadData, loadDataFailure, loadDataSuccess } from './homepage.actions';

@Injectable()
export class DataEffects {
  loadData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadData),
      exhaustMap(() =>
        this.dataService.getData().pipe(
          map((data) => loadDataSuccess({ data })),
          catchError((error) => of(loadDataFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private dataService: DataService) {}
}
