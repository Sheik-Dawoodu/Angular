import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiservicesService } from 'src/app/servis/apiservices.service';
import { NotificationService } from 'src/app/servis/notification.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
 
  // Reactive Form 

 public userForm:FormGroup
 public item:any
 public image: any;
 public gettingData:any[]=[]
 public profile:any
 public fileName:any
 public isEditForm: boolean = false;

  constructor(private apiService:ApiservicesService,private formbuilder:FormBuilder,private notifyService:NotificationService){
    this.userForm=this.formbuilder.group({
      name:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      profile:new FormControl('',Validators.required),
      age:new FormControl('',Validators.required),
    })
   }
  ngOnInit(): void {
    this.getUser()
  }

  // Get function 
  getUser(){
    this.apiService.getApi().subscribe((res:any)=>{
      console.log(res);
      this.gettingData=res;
    })
  }
  adduser(){
    const formData = new FormData();
    console.log(this.userForm.value);
    if(this.userForm.valid){
      console.log(this.userForm.value);        
      formData.append("name", this.userForm.value.name);
      formData.append("age",this.userForm.value.age);
      formData.append("email", this.userForm.value.email);
      formData.append("profile", this.image);        

      console.log('formData', formData);
      
      this.apiService.postApi(formData).subscribe({
        next:(res)=>{
          console.log(res);
          this.notifyService.showSuccess("Add user Successfully")
          this.userForm.reset() 
          this.getUser()
        },
        error:console.log   
      })
    }
  }  
  deleteUser(id:number){
   console.log();
   this.apiService.delectApi(id).subscribe({
    next:(res)=>{
      this.notifyService.showSuccess("Successfully Deleted")
      this.getUser()
    },
    error:console.log
    
   })
  }

  onedit(item:any){
    console.log(item);
    this.item = item;
    const baseUrl = "http://100.25.168.245/node-simple-crud/";
    this.fileName = baseUrl + item.profile;
   this.userForm.controls['name'].patchValue(item.name);
   this.userForm.controls['email'].patchValue(item.email);
   this.userForm.controls['age'].patchValue(item.age);
   this.userForm.controls['profile'].patchValue(this.fileName);
  }

  // File uplode
  onFileSelected(event:any) {
   const file:File = event.target.files[0];
    console.log('file', file);
    if (file) {
        this.fileName = file.name;
        this.image = file;              
     }
}
upDateuser(){
  const formData = new FormData();
  formData.append("name", this.userForm.value.name);
  formData.append("age",this.userForm.value.age);
  formData.append("email", this.userForm.value.email);
  formData.append("profile", this.image); 
  this.apiService.updateApi(this.item._id, formData).subscribe({
    next:(res)=>{
      console.log('update', res);
      this.getUser()
      this.notifyService.showSuccess("Add user Successfully")  
    }
  })
  this.userForm.reset() 
}

close(){
  this.fileName = '';
  this.userForm.reset()
}
}