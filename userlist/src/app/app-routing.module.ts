import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/user/list/list.component';
import { ModelComponent } from './components/user/model/model.component';
import { PageNotFounComponent } from './components/page-not-foun/page-not-foun.component';

const routes: Routes = [
  {path:'',component:ListComponent},
  {path:'modal',component:ModelComponent}, 
  {path:'**',component:PageNotFounComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
