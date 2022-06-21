import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GiocoComponent } from './gioco/gioco.component';
import { BottoneComponent } from './bottone/bottone.component';
import { HeaderComponent } from './header/header.component';
import { TastieraComponent } from './tastiera/tastiera.component';

@NgModule({
  declarations: [
    AppComponent,
    GiocoComponent,
    BottoneComponent,
    HeaderComponent,
    TastieraComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
