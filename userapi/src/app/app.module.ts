import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './componentsfolder/userlist/userlist.component';
import { ViewuserComponent } from './componentsfolder/viewuser/viewuser.component';
import { PageNotFoundedComponent } from './componentsfolder/page-not-founded/page-not-founded.component';



@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    ViewuserComponent,
    PageNotFoundedComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
