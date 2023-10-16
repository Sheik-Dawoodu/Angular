import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { map, of, pipe, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // Get method
  getuser(){
    return this.http.get("https://reqres.in/api/users").pipe(
      switchMap((response: any) => of(response.data))
    )
  }

}