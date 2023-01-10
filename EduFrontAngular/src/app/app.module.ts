import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TutorialesComponent } from './componentes/tutoriales/tutoriales.component';
import { MaterialImportsModule } from './material-imports/material-imports.module';


@NgModule({
  declarations: [
    AppComponent,
    TutorialesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialImportsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
