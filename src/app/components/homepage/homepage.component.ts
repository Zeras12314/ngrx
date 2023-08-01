import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MealCategory } from 'src/app/models/app-state-mode';
import { loadData } from './homepage-state/homepage.actions';
import { AppState } from 'src/app/store/app.state.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  data$: Observable<MealCategory[]> = this._store.pipe(
    select((state: AppState) => state.data)
  );

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {}
}
