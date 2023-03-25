import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";


const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
      {path: 'employees', loadChildren: () => import('./employees/employees.module').then(value => value.EmployeesModule)}
    ]}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    RouterModule
  ]
})
export class AppRoutingModule { }
