import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  constructor(private http:HttpClient) { }

  getApi(){
   return this.http.get('http://52.87.11.122:3002/users')
  }

  postApi(data:any):Observable<any>{
    return this.http.post(' http://52.87.11.122:3002/users',data)
  }

  delectApi(id:number):Observable<any>{
    return this.http.delete(`http://52.87.11.122:3002/users/${id}`)
  }

  getSingleUserApi(id:string){
    return this.http.get(`https://reqres.in/api/users ${id}`)
  }

  updateApi(id:any,data:any){
    return this.http.put(`http://52.87.11.122:3002/users/${id}`,data)
  }
}
