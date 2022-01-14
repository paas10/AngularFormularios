import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioBasicoComponent } from './formulario-basico/formulario-basico.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioBasicoComponent,
    FormularioReactivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
