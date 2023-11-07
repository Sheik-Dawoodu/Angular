import { Injectable } from '@angular/core';
import { AuthenticationService} from './authentication.service';
import { Router,ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree,CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private service:AuthenticationService, private router:Router) { }
  
}
