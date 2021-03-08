import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private _api: ApiService,
    private _router: Router) {}
  
  canActivate(): boolean {
    if(this._api.loggedIn()) {
      return true;
    }
    else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}
