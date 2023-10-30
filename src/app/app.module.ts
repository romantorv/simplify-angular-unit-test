import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SampleOneComponent } from './components/sample-one.component';
import { BlockComponent } from './components/block.component';
import { ConvertToSnack } from './pipes/string.pipe';


const declaredComponents = [SampleOneComponent, BlockComponent, ConvertToSnack];

@NgModule({
  declarations: [AppComponent, ...declaredComponents],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
