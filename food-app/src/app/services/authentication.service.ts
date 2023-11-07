import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient, private router:Router) { }
  logInValue:boolean=false;
  // Login 
  login(data: any):Observable<any>{
    return this.http.post('http://52.87.11.122:8000/login',data)
  }
  // Register 
  register(data: any):Observable<any>{
    return this.http.post('http://52.87.11.122:8000/register',data)
  }
  
  isAuthentication():boolean{
    if(sessionStorage.getItem('token')!==null){
      return true
    }
    return false
  }
  canAccess(){
    if(! this.isAuthentication){
      this.router.navigate(['/login'])
    }
  }
  
  removeuser(){
    sessionStorage.removeItem('token')
  }

  storeToken(token:string){
    sessionStorage.setItem('token',token)
  }
}
