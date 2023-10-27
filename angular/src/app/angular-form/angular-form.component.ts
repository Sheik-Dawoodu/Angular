import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css']
})
export class AngularFormComponent {
  countryList:Contry[]=[
    new Contry(1,'india'),
    new Contry(2,'USA'),
    new Contry(3,'Australia')
  ]
  // onsubmit(value:NgForm){
  //   console.log(value.value);
  // }
  email:string|undefined='test'
  submit(form:NgForm){
    console.log(form.value);
    console.log(form.valid);
    
  }
}
class Contry{
  id:number;
  name:string

  constructor(id:number,name:string){
    this.id=id;
    this.name=name
  }
}
