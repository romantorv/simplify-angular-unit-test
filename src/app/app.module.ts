import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UrlService } from './services/url.service';
import { SampleTwoComponent } from './components/sample-two.component';
import { Env } from './tokens';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, SampleTwoComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [UrlService, { provide: Env, useValue: 'production' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
