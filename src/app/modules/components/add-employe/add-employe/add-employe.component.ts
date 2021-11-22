import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employe } from 'src/app/modules/models/employe';
import { EmployeService } from 'src/app/modules/services/employe.service';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {
  employee: Employe = new Employe(0,"","","",0);
  submitted = false;

  constructor(private employeeService: EmployeService, private router: Router) { }

  ngOnInit(): void {
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employe(0,"","","",0);
  }

  save(){
    this.employeeService.createEmploye(this.employee).subscribe(data => {
      console.log(data)
      this.employee = new Employe(0,"","","",0);
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
}
