import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICustomer } from '../employee-detail/customer';
import { throwError, Observable } from 'rxjs';

@Component({
  selector: 'app-http-git-hub-url-example',
  templateUrl: './http-git-hub-url-example.component.html',
  styleUrls: ['./http-git-hub-url-example.component.css']
})
export class HttpGitHubUrlExampleComponent implements OnInit {
  public userName="";
  response: any;
  customerRes: any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  search(){
   this.http.get("https://api.github.com/users/"+this.userName).
   subscribe(data=>{this.response=data;
    console.log(this.response);});
   
   
    this.http.get("http://localhost:8080/spring-crm-rest/api/customers").
   subscribe(data=>{this.customerRes=data;
    console.log(this.customerRes);});

  
  
    
  }

}
