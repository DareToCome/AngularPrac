import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../../service/users-data.service';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditEmpComponent } from '../add-edit-emp/add-edit-emp.component';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css'],
})
export class ApiCallComponent implements OnInit {
  constructor(
    private apiservice: UsersDataService,
    private _dialog: MatDialog
  ) {}
  data: any = [];
  displayedColumns: string[] = ['slno', 'name', 'type', 'status', 'tool'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  editEmpForm() {
    // this._dialog.open(AddEditEmpComponent);
    // this.editEmpDetails(data: any)
  }

  editEmpDetails(data: any) {
    this._dialog.open(AddEditEmpComponent, {
      data,
    });
  }
  ngOnInit() {
    this.apiservice.user('users').subscribe((res: any) => {
      // console.log(res);
      this.data = res;
      this.data[1].site_admin = true;
      this.dataSource = new MatTableDataSource<any>(this.data);
      console.log(this.dataSource);
    });
  }
}
