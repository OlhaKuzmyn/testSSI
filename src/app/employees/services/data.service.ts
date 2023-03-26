import { Injectable } from '@angular/core';
import {IEmployee} from "../../interfaces/employee.interface";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  updEmployee = new BehaviorSubject<IEmployee | null>(null);

  delEmployee = new BehaviorSubject<IEmployee | null>(null)

}
