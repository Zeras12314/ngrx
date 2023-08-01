import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { DataEffects } from './components/homepage/homepage-state/homepage.effects';
import { dataReducer } from './components/homepage/homepage-state/homepage.reducer';
import { NavComponent } from './components/shared/nav/nav.component';
import { CardsComponent } from './components/shared/cards/cards.component';

@NgModule({
  declarations: [AppComponent, HomepageComponent, NavComponent, CardsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ data: dataReducer }),
    EffectsModule.forRoot([DataEffects]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
