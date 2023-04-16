import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '', 
  component:EmployeeCreateComponent
},
{
  path: ':id',
  component:EmployeeCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeecreateRoutingModule { }
