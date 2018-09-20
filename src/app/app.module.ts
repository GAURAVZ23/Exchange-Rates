import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CurrencyViewerModule } from './currency-viewer/currency-viewer.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // angular module
    BrowserModule,
    //custom module
    CurrencyViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
