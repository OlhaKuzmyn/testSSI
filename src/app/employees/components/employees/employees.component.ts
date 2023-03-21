import { Component, OnInit } from '@angular/core';
import {IEmployee} from "../../../interfaces/employee.interface";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: IEmployee[]

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.employees.subscribe(value => {
      if (value) {
        this.employees = value
      } else {
        this.employees = []
      }
    })
  }

}
