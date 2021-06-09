import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeruesComponent } from './herues/herue/herues.component';
import { ListadoComponent } from './herues/listado/listado.component';
import { ContaModule } from './contador/conta.module';


@NgModule({
  declarations: [
    AppComponent,
    HeruesComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
