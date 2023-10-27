import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.store';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './store/counter.effect';
import { CounterComponent } from './components/counter.component';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer }),
    EffectsModule.forRoot([CounterEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
