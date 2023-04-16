import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../../../services/employee-api.service';
import { EmployeeModel } from './../../../Employee/employee/employee-compo/employee.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

addemployeeform!: FormGroup;
employeeData!:any;
employeeModelObj:EmployeeModel = new EmployeeModel();

id:any;
isAdd:boolean=false;
isUpdate:boolean=false;


  constructor(
private formbuilder: FormBuilder,
private api: ApiService,
private router: Router,
private route: ActivatedRoute

  ) { }


  ngOnInit(): void {
    this.addemployeeform = this.formbuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['',[Validators.required, Validators.minLength(3)]],
      salary: [ '', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(6),]],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      mobile: [ '' , [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),]]

    })

      this.route.params.subscribe(data=>{
      this.id=data["id"]
      if(this.id){
        this.isUpdate=true;
        this.getEmployeeDetails(this.id)
      }
      else{
        this.isAdd=true;
      }
      
    })
  }
  getEmployeeDetails(employeeId:string){
    this.api.getEmployeeById(employeeId)
    .subscribe((res)=>{
      if(res){
        this.addemployeeform.patchValue({
          firstName:res.firstName,
          lastName: res.lastName,
          email: res.email,
          mobile: res.mobile,
          salary: res.salary

        })
      }

    })
  }
  get firstName(){
    return this.addemployeeform.get('firstName')
  }
  get lastName(){
    return this.addemployeeform.get('lastName')
  }
  get mobile(){
    return this.addemployeeform.get('mobile')
  }
  get email(){
    return this.addemployeeform.get('email')
  }
  get salary(){
    return this.addemployeeform.get('salary')
  }
  postEmployeeDetails(){
   
    this.employeeModelObj.firstName=this.addemployeeform.value.firstName;
    this.employeeModelObj.lastName=this.addemployeeform.value.lastName;
    this.employeeModelObj.email=this.addemployeeform.value.email;
    this.employeeModelObj.mobile=this.addemployeeform.value.mobile;
    this.employeeModelObj.salary=this.addemployeeform.value.salary;

    this.api.postEmployee(this.employeeModelObj)
    .subscribe(res=>{
      console.log(res);
      this.router.navigate(['employee'])
    },)
    this.api.updateEmployee(this.employeeModelObj,this.id)
    .subscribe(res=>{
      console.log(res)
      this.router.navigate(['employee'])
    })
  }

}