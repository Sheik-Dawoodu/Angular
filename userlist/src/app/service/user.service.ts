import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { map, of,switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  group(arg0: { userName: string; email: string; }): import("@angular/forms").FormGroup<any> {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  // Get method
  getuser(){
    return this.http.get("https://reqres.in/api/users").pipe(
      switchMap((response: any) => of(response.data))
    )
  }

  adduser(id:any){
    return this.http.post("https://reqres.in/api/users",id)
  }
}