import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData = { 
    email: "",
    password: ""
  };
  constructor(
    private _api: ApiService,
    private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    this._api.loginUser(this.userData).subscribe(
      res => {
        var data: Object = res;
        localStorage.setItem('token', data['token']);
        this._router.navigate(['/manage']);
      },
      err => console.log(err)
    );
  }

}
