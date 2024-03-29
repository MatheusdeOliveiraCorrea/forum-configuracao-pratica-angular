import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovoComponenteComponent } from './novo-componente/novo-componente.component';
import { ComponenteBranchNovaComponent } from './componente-branch-nova/componente-branch-nova.component';

@NgModule({
  declarations: [
    AppComponent,
    NovoComponenteComponent,
    ComponenteBranchNovaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
