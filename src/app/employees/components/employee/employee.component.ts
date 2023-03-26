import {Component, Input, OnInit} from '@angular/core';
import {IEmployee} from "../../../interfaces/employee.interface";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input()
  employee: IEmployee
  employeeForUpdate: IEmployee|null

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  upd(employee: IEmployee): void {
    this.employeeForUpdate = employee
    this.dataService.updEmployee.next(employee)
  }

  del(id: number, employee:IEmployee) {
    if (confirm(`Are you sure you want to delete this employee with name: ${employee.name}`)) {
      this.dataService.delEmployee.next(employee)
    }
  }

}
