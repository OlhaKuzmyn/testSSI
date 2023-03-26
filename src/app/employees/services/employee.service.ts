import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {IEmployee} from "../../interfaces/employee.interface";
import {HttpClient} from "@angular/common/http";
import {urls} from "../../constants/urls";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>(urls.employees)
  }

  createEmployee(employee:IEmployee): Observable<IEmployee> {
    return this.httpClient.post<IEmployee>(urls.employees, employee)
  }

  updateEmployeeByID(id:number, employeeUpd: IEmployee): Observable<IEmployee> {
    return this.httpClient.patch<IEmployee>(`${urls.employees}/${id}`, employeeUpd)
  }

  deleteEmployee(id:number): Observable<void> {
    return this.httpClient.delete<void>(`${urls.employees}/${id}`)
  }

}
