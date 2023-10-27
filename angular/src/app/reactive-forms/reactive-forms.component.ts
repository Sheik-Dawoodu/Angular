import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(private formBuilder:FormBuilder){
  }
  createAdressForm!:FormGroup
  createForm =new FormGroup({
    firstName:new FormControl('',Validators.required),
    lastName :new FormControl('',Validators.required)
  })

  onsumit(){
    if(this.createForm.valid){
      // alert("valid")
      return
    }
    else if(this.createForm.invalid){
      alert("InValid data")
    }
  }
  ngOnInit(): void {
    this.createAdressForm=this.formBuilder.group({
      fistName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      address:this.formBuilder.group({
        streetAddress:['',[Validators.required]],
        zipCode:['',Validators.required,Validators.min(6)]
      })
    })
  }
  
  isfieldValid(field:any){
    if(field !==null && this.createAdressForm !==null){
      alert('Success')
    }
  }
}
