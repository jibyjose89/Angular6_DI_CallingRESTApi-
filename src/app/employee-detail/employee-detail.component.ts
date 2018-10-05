import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  public employees=[];
  public errorMsg;

  constructor(private empService:EmployeeService) { }

  ngOnInit() {
    // Subscribe to the observable from EmpList and EmpDetail.
    // data is the argument. right hand side of the fatty arrow is the body
    this.empService.getEmployees().subscribe(data => this.employees= data,error => this.errorMsg = error);
    
  }

}
