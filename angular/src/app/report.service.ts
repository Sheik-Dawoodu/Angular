import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor() { }
  getList(){
    return[
      {'name':'sheik dawood','grade':1,'age':23,'cuntry':'India'},
      {'name':'Harikrishna','grade':2,'age':23,'cuntry':'India'},
      {'name':'joel','grade':3,'age':23,'cuntry':'India'},
      {'name':'Hari Krishna','grade':4,'age':23,'cuntry':'India'},
      {'name':'Kathir','grade':5,'age':23,'cuntry':'India'},
      {'name':'garunya','grade':6,'age':23,'cuntry':'India'},
      {'name':'Prasanth','grade':7,'age':23,'cuntry':'India'},
      {'name':'Balaji','grade':8,'age':23,'cuntry':'India'}
    ]
  }
}
