import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './componentsfolder/userlist/userlist.component';
import { ViewuserComponent } from './componentsfolder/viewuser/viewuser.component';
import { PageNotFoundedComponent } from './componentsfolder/page-not-founded/page-not-founded.component';

const routes: Routes = [
  {path:'',component:UserlistComponent},
  {path:'singleuser/:userid',component:ViewuserComponent},
  {path:'**',component:PageNotFoundedComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
