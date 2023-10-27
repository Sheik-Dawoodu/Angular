import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
 public date=new Date()
public message:string='Sheik Dawoodu'
protected price:number=125
num=546464563536
percentage:number=20

}