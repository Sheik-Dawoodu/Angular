import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewApiService } from 'src/app/services/view-api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit{
hotelFormField: FormGroup

  constructor(private _fb:FormBuilder, private service:ViewApiService){
    this.hotelFormField=this._fb.group({
      hotel_name:new FormControl('',[Validators.required]),
      hotel_address:new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
  }
  onclick(){
    if(this.hotelFormField.valid){
      console.log('form field',this.hotelFormField);
      this.service.postHotelsdata(this.hotelFormField.value).subscribe({
        next:(res:any)=>{
          alert('successfully created')
        },
        error:()=>{
          console.log(Error); 
        }
      })
    }
    
  }
}
