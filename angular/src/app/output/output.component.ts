import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
 public storage:string[]=[]
 
foodupdateData(foods:string[]){
  this.storage=foods
}
}
