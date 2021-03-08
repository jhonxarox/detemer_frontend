import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _baseUrl = "http://localhost:3000/";

  constructor(
    private http: HttpClient,
    private _router: Router) { }

  registerUser(user) {
    let url = this._baseUrl + 'api/register';
    return this.http.post<{}>(url, user);
  }

  loginUser(user) {
    let url = this._baseUrl + 'api/login';
    return this.http.post<{}>(url, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
  
  logOut() {
    localStorage.removeItem('token');
    this._router.navigate(['login']);
  }

  getAllTables() {
    let url = this._baseUrl + 'api/allTables';
    return this.http.post<{}>(url, {});
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
