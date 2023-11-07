import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewApiService } from 'src/app/services/view-api.service';

@Component({
  selector: 'app-food-mat-dialog',
  templateUrl: './food-mat-dialog.component.html',
  styleUrls: ['./food-mat-dialog.component.css']
})
export class FoodMatDialogComponent implements OnInit{

  foodForm:FormGroup

  constructor(private service:ViewApiService,private _fb:FormBuilder){
    this.foodForm=this._fb.group({
      food_name:new FormControl('',[Validators.required]),
      food_price:new FormControl('',[Validators.required])
    })
  }
  ngOnInit(): void {
    
  }

  onclick(){
    if(this.foodForm.valid){
      console.log(this.foodForm.value); 
      this.service.postFood(this.foodForm.value).subscribe({
        next:(res:any)=>{
          alert('successfully created')
        },
        error:(err)=>{
          console.log(err);
          
        }
      })
    }   
  }
}
