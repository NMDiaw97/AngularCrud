import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe } from '../models/employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  private baseUrl = 'http://localhost:8088/api/v1'

  constructor(private http: HttpClient) { 
    
  }
  getEmployeList(): Observable<any>{
    return this.http.get(`${this.baseUrl}/employes`);
  }

  createEmploye(employe: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}/save`, employe);

  }
  updateEmploye(id: number, employe: Object): Observable<Object>{
    return this.http.put(`${this.baseUrl}/employe/{id}`, employe);

  }

  deleteEmploye(id: number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/{id}`, {responseType: 'text'});

  }
  getEmploye(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/{id}`);
  }

}
