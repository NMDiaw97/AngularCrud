import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employe } from 'src/app/modules/models/employe';
import { EmployeService } from 'src/app/modules/services/employe.service';

@Component({
  selector: 'app-dashboard-employe',
  templateUrl: './dashboard-employe.component.html',
  styleUrls: ['./dashboard-employe.component.css']
})
export class DashboardEmployeComponent implements OnInit {
  employees!: Observable<Employe[]>;

  constructor(private employeService: EmployeService, private router: Router) {

  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeService.getEmployeList();
  }

  deleteEmplye(id: number) {
    this.employeService.deleteEmploye(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }
  employeeDetails(id: number){
    this.router.navigate(['details',id]);
  }

}
