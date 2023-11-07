import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ViewApiService {

  constructor(private http:HttpClient) { }
  // Hotel API 
  postHotelsdata(data:any):Observable<any>{
 return this.http.post('http://52.87.11.122:8000/create-hotel',data)
  }
  getHotelsdata():Observable<any>{
    return this.http.get('http://52.87.11.122:8000/get-hotel-list')
   }
   
  //  Food API 
  getFood():Observable<any>{
    return this.http.get('http://52.87.11.122:8000/get-food-list/65448b666327581e8369bba8')
  }

  postFood(data:any):Observable<any>{
    return this.http.post('http://52.87.11.122:8000/add-food-list/65448b666327581e8369bba8',data)
  }

  
}
