import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiservicesService } from 'src/app/servis/apiservices.service';
import { UserlistComponent } from '../userlist/userlist.component';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  
  constructor (private apiService:ApiservicesService,private activatroute:ActivatedRoute){}
  ngOnInit(): void {
   let userid=this.activatroute.snapshot.paramMap.get('userid')
   console.log(userid); 
   this.apiService.getSingleUserApi('userid').subscribe((res)=>{
    console.log(res);
   })
  }
}
