
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeecreateRoutingModule } from './employeecreate-routing.module';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';


@NgModule({
  declarations: [
    EmployeeCreateComponent
  ],
  imports: [
    CommonModule,
    EmployeecreateRoutingModule,
    ReactiveFormsModule,
    
  ]
})
export class EmployeecreateModule { }
