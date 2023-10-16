import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
public userlist:any

constructor(private user:UserService,private router:Router){
 
}

ngOnInit(): void {
  this.user.getuser().subscribe(data=>{
    console.log(data);
    this.userlist = data;
  })
}

goToComponent(){
  this.router.navigate(['/modal'])
}
}
