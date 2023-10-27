import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-calculater',
  templateUrl: './calculater.component.html',
  styleUrls: ['./calculater.component.css']
})
export class CalculaterComponent {
  @Input() inputelament:string=''
  title = 'calculater';
  values='0'
  currentvalue=''

  writeinput(value:string){
    this.currentvalue = this.currentvalue + value
    this.values=this.currentvalue 
  }
  equal(){
    this.values=eval(this.currentvalue)
    this,this.currentvalue=this.values
  }
  clear(){
    this.currentvalue='';
    this.values=this.currentvalue
  }
  back(){
    this.currentvalue=this.currentvalue.slice(0,-1)
    this.values=this.currentvalue
  }
}
