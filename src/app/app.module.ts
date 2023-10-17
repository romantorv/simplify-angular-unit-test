import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConvertToSnack } from './pipes/string.pipe';
import { UrlService } from './services/url.service';
import { SampleTwoComponent } from './components/sample-two.component';
import { Env } from './tokens';

@NgModule({
  declarations: [AppComponent, ConvertToSnack, SampleTwoComponent],
  imports: [BrowserModule],
  providers: [UrlService, { provide: Env, useValue: 'production' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
