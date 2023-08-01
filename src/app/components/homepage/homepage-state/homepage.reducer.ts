import { createReducer, on } from '@ngrx/store';
import { loadDataFailure, loadDataSuccess } from './homepage.actions';
import { MealCategory } from 'src/app/models/app-state-mode';

export const initialState: MealCategory[] = [];

export const dataReducer = createReducer(
  initialState,
  on(loadDataSuccess, (state, { data }) => data),
  on(loadDataFailure, () => [])
);
