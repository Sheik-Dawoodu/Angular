import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  formGroup: FormGroup
  hide:boolean=true
  loading:boolean=false
  error:string=''
  constructor(private service:AuthenticationService){
    this.formGroup=new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl('',[Validators.required,]),
    })    
   }
  ngOnInit(): void {    }
 
  email = new FormControl('', [Validators.required, Validators.email]);
    getErrorMessage() {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }
      return this.email.hasError('email') ? 'Not a valid email' : '';
    } 
    loginProcess(){
      this.loading=true
      if(this.formGroup.valid){
        this.service.login(this.formGroup.value).subscribe({
          next:(res)=>{
            alert('Login Successfully')
            console.log(res,'login res');
            
          }
        })
      }
    }

    // loginProcess(){
    //   this.service.login(this.formGroup.value).subscribe({
    //     next:data=>{
    //       this.service.storeToken(data.idToken)
    //       console.log(data.idToken+"data.idToken");
    //     },
    //     error:data=>{
    //       if(data.error.error.message='Email_exists'){
    //         this.error='invalid user'
    //       }
    //       else if(data.error.error.message='Email_exists'){
    //         this.error="Alredy Exists"
    //       }
    //       else{
    //         this.error="unoun error"
    //       }
    //     }
    //   })
    // }
    // // .add(()=>{
    //   this.loading=false
    // })
}