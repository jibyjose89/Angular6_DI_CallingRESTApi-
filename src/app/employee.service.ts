import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';

import { throwError, Observable } from 'rxjs'
import {catchError} from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url:string="/assets/data/employees.json";
  // Inject httpClient as a dependency in the employee service.
  constructor(private http:HttpClient) { }
  // Receive the observable and cast into an employee array.
  getEmployees():Observable<IEmployee[]>{
    // http get request  from EmpService.
    return this.http.get<IEmployee[]>(this.url)
    .pipe(catchError(this.errorHandler));
    
                    
  }
  errorHandler(error : HttpErrorResponse){
      return throwError(error.message || "Server Error");
}
}
