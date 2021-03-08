import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  
  allTables: Array<String>;
  constructor(
    private _api: ApiService,
    private _router: Router) { }

  ngOnInit(): void {
    this.getAllTables();
  }

  getAllTables() {
    this._api.getAllTables().subscribe(
      res => {
        var data: Object = res;
        this.allTables = data['data'].map(x => x.name);
      },
      err => {
        if(err instanceof HttpErrorResponse) {
          if(err.status === 401) {
            this._router.navigate(['/login']);
          }
        }
      }
    );
  }

}
