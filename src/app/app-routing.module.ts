
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path: 'login', component:LoginComponent},
{path: 'forget-password', component: ForgetPasswordComponent},
{path: '', redirectTo: '/login', pathMatch: 'full'},
{path: 'dashboard', loadChildren: ()=> import('./modules/Department/department/department.module').then(m =>m.DepartmentModule)},
{path: 'employee', loadChildren: ()=> import('./modules/Employee/employee/employee.module').then(m =>m.EmployeeModule)},
{path: 'create', loadChildren: ()=> import('./modules/EmployeeCreate/employeecreate/employeecreate.module').then(m =>m.EmployeecreateModule)},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
