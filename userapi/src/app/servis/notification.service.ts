import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

   showSuccess(message:any){
    console.log('toastr called');
      this.toastr.success(message)
    }

  showError(message:any, title:any){

      this.toastr.error(message, title)

  }
  
  showInfo(message:any, title:any){

      this.toastr.info(message, title)

  }
  showWarning(message:any, title:any){

      this.toastr.warning(message, title)
  }
}
