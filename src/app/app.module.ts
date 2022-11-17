import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LampaComponent } from './lampa/lampa.component';
import { LedfalComponent } from './ledfal/ledfal.component';

@NgModule({
  declarations: [
    AppComponent,
    LampaComponent,
    LedfalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
