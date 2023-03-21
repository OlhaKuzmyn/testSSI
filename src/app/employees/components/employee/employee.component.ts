import {Component, Input, OnInit} from '@angular/core';
import {IEmployee} from "../../../interfaces/employee.interface";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input()
  employee: IEmployee

  constructor() { }

  ngOnInit(): void {
  }

}
