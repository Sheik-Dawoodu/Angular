import { Component,OnInit } from '@angular/core';
import { ViewApiService } from 'src/app/services/view-api.service';
import { MatDialog } from '@angular/material/dialog';
import { FoodMatDialogComponent } from '../food-mat-dialog/food-mat-dialog.component';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
public gettingFoodList:any  //Food Data

openDialog(){
  this.dialog.open(FoodMatDialogComponent)
}
  constructor(private service:ViewApiService, public dialog:MatDialog){}

  ngOnInit(): void {
    this.getfoods()
  }  
  value: number = 0;

  increase() {
    this.value++;
  }

  decrease() {
    if (this.value > 0) {
      this.value--;
    }
  }
  getfoods(){
    this.service.getFood().subscribe({
      next:(res)=>{
        this.gettingFoodList=res.data
        console.log('get Food',res);
      }
    })
  }
}