import { Component, OnInit } from '@angular/core';
import {IEmployee} from "../../../interfaces/employee.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup
  employee: IEmployee


  constructor(private employeeService:EmployeeService) {
    this._createForm()

  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.employeeForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      employed: new FormControl(null),
      experience: new FormControl(null, [Validators.min(0.5), Validators.max(20)])
    })
  }

  newEmployee(): void {
    const rawValue = this.employeeForm.getRawValue();
    console.log(rawValue);
    this.employeeService.createEmployee(rawValue).subscribe(()=>{
      this.employeeForm.reset()
    })


  }

}
