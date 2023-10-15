import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SampleOneComponent } from './components/sample-one.component';
import { BlockComponent } from './components/block.component';

const declaredComponents = [SampleOneComponent, BlockComponent];

@NgModule({
  declarations: [AppComponent, ...declaredComponents],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
