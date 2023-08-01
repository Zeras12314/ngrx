import { createAction, props } from '@ngrx/store';
import { MealCategory } from 'src/app/models/app-state-mode';

export const loadData = createAction('[Data Page] Load Data');
export const loadDataSuccess = createAction(
  '[Data API] Data Loaded Successfully',
  props<{ data: MealCategory[] }>()
);
export const loadDataFailure = createAction(
  '[Data API] Data Loaded Error',
  props<{ error: any }>()
);
