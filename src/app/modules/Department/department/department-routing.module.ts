import { DepartmentCompoComponent } from './department-compo/department-compo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  
   {path:'',pathMatch: 'full' , component: DepartmentCompoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
