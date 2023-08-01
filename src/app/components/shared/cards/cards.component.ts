import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MealCategory } from 'src/app/models/app-state-mode';
import { AppState } from 'src/app/store/app.state.model';
import { loadData } from '../../homepage/homepage-state/homepage.actions';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  meals$: Observable<MealCategory[]> = this._store.pipe(
    select((state: AppState) => state.data)
  );

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {
    this._store.dispatch(loadData());
    this.meals$.subscribe((meals) => {
      console.log('data', meals);
    });
  }
  truncateWithEllipsis(text: string, maxLength: number): string {
    if (text.length <= maxLength) {
      return text;
    } else {
      const truncatedText = text.slice(0, maxLength - 3); // Subtract 3 for the three ellipses
      return truncatedText + '...';
    }
  }
}
