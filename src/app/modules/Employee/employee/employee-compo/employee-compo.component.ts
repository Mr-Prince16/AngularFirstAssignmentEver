import { ApiService } from './../../../../services/employee-api.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-compo',
  templateUrl: './employee-compo.component.html',
  styleUrls: ['./employee-compo.component.css']
})
export class EmployeeCompoComponent implements OnInit {
  employeeData: any;
  id!: number;

  constructor(private auth: AuthService, private route:Router, private api: ApiService) { }

  ngOnInit(): void {

    this.getAllEmployee();
  }

  getAllEmployee(){
    this.api.getEmployee()
    .subscribe(res=>{
      this.employeeData=res;
      console.log(res)
    })

  }
logout(): void{
  this.auth.logout();
    }
    clickAddEmployee(){
      this.route.navigate(['create'])
    }
    deleteEmployee(row : any){
      this.api.deleteEmployee(row.id)
      .subscribe(res=>{
        this.getAllEmployee();
      })
    }
    onEdit(row:any){
      this.route.navigate(['create', row.id]);
    }
    searchEmployee(id: any){
      if(id===this.id){
      this.api.getemployeeById(id)
      .subscribe((res:any) =>{
        this.employeeData=[res];
      })
    }
    else
    {
      alert('Record not present')
    }
  
  }
}
