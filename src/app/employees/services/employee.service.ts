import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {IEmployee} from "../../interfaces/employee.interface";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  // employees = new BehaviorSubject<IEmployee[] | null>(null)
  employees: IEmployee[]

  //  getAll(): Observable<IEmployee[]> {
  //   return this.employees
  // }
}
