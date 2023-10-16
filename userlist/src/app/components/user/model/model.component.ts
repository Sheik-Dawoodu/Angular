import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent {
  constructor(private user:UserService,){
    
  }
 
  }

  // onusercreate(user: {userName:string,userMailId:string}){
  //   console.log(user); 
  // }
  
