import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userData = { 
    email: "",
    password: ""
  };
  constructor(
    private _api: ApiService,
    private _router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    this._api.registerUser(this.userData).subscribe(
      res => {
        var data: Object = res;
        localStorage.setItem('token', data['token']);
        this._router.navigate(['/manage']);
      },
      err => console.log(err)
    );
  }

}
