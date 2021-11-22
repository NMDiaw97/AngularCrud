import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeComponent } from './modules/components/add-employe/add-employe/add-employe.component';
import { DashboardEmployeComponent } from './modules/components/dashboard-employe/dashboard-employe/dashboard-employe.component';
import { DetailEmployeComponent } from './modules/components/detail-employe/detail-employe/detail-employe.component';
import { EditEmployeComponent } from './modules/components/edit-employe/edit-employe.component';
import { EmployeComponent } from './modules/models/employe/employe.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeComponent,
    DashboardEmployeComponent,
    DetailEmployeComponent,
    EditEmployeComponent,
    EmployeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
