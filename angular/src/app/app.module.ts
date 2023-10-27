import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { CalculaterComponent } from './calculater/calculater.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { DirectivesComponent } from './directives/directives.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReportService } from './report.service';
import { ServicesComponent } from './services/services.component';
import {HttpClientModule} from '@angular/common/http';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component'

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    CalculaterComponent,
    InputComponent,
    OutputComponent,
    DirectivesComponent,
    PageNotFoundComponent,
    ServicesComponent,
    AngularFormComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }