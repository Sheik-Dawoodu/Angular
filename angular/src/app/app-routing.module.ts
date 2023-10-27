import { Component, NgModule,} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculaterComponent } from './calculater/calculater.component';
import { PipesComponent } from './pipes/pipes.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { DirectivesComponent } from './directives/directives.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServicesComponent } from './services/services.component';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


const routes: Routes = [
  {path:'calculater',component:CalculaterComponent},
  {path:'pipe',component:PipesComponent},
  {path:'input',component:InputComponent},
  {path:'output',component:OutputComponent},
  {path:'directives',component:DirectivesComponent},
  {path:'services',component:ServicesComponent},
  {path:'forms',component:AngularFormComponent },
  {path:'reactiveforms',component:ReactiveFormsComponent },
  {path:'**',component:PageNotFoundComponent},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
