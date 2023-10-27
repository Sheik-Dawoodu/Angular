import { Component,EventEmitter,Output} from '@angular/core';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
@Output()foodData:EventEmitter<string[]>=new EventEmitter;
 public foodName:string[]=[]
 public value:string=''
 addfood(){
  this.foodName.push(this.value)
  this.value=""
  console.log(this.foodName);
  this.foodData.emit(this.foodName)
 }
}
