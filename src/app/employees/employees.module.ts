import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeesComponent } from './components/employees/employees.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    EmployeeFormComponent,
    EmployeeComponent,
    EmployeesComponent
  ],
    imports: [
        CommonModule,
        EmployeesRoutingModule,
        ReactiveFormsModule
    ]
})
export class EmployeesModule { }
