import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ListComponent } from './components/user/list/list.component';
import { ModelComponent } from './components/user/model/model.component';
import { SingleListComponent } from './components/user/single-list/single-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PageNotFounComponent } from './components/page-not-foun/page-not-foun.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ListComponent,
    ModelComponent,
    SingleListComponent,
    PageNotFounComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
