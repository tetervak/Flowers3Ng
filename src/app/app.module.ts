import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FooterComponent} from './footer.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FlowerDetailsComponent} from './flower-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FlowerDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
