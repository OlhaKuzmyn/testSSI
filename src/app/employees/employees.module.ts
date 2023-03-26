import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './components/employees/employees.component';
import {ReactiveFormsModule} from "@angular/forms";
import {EmployeeService} from "./services/employee.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    EmployeeService
  ]
})
export class EmployeesModule { }
