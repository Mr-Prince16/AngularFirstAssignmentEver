import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentCompoComponent } from './department-compo/department-compo.component';


@NgModule({
  declarations: [
    DepartmentCompoComponent,
    
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DepartmentModule { }
