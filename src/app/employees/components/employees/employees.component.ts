import { Component, OnInit } from '@angular/core';
import {IEmployee} from "../../../interfaces/employee.interface";
import {EmployeeService} from "../../services/employee.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: IEmployee[]
  employeeForm: FormGroup
  employee: IEmployee
  employeeForUpd: boolean
  employeeUpdID: number


  constructor(private employeeService:EmployeeService) {
    this._createForm()
  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe({next: (value) => this.employees = value})
  }

  _createForm(): void {
    this.employeeForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      employed: new FormControl(null),
      experience: new FormControl(null, [Validators.min(0.5), Validators.max(20)])
    })
  }

  upd(employee:IEmployee) {
    console.log(employee);
    this.employeeForUpd = true
    this.employeeUpdID = employee.id!
    delete employee.id
    this.employeeForm.setValue(employee)
  }

  del(id: number) {
    this.employeeService.deleteEmployee(id).subscribe()
}

  saveEmployee(): void {
    let newEmployee = this.employeeForm.getRawValue();
    if (this.employeeForUpd) {
      this.employeeService.updateEmployeeByID(this.employeeUpdID,newEmployee).subscribe(()=>{
        this.employees = this.employees.map(employee => employee.id === this.employeeUpdID ? newEmployee : employee)
        this.employeeForUpd = false
        this.employeeForm.reset()
      })
    } else {
      this.employeeService.createEmployee(newEmployee).subscribe(() => {
        this.employees.push(newEmployee)
        this.employeeForm.reset()
      })
    }

  }

}
