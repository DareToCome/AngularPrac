import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../../service/users-data.service';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css'],
})
export class ApiCallComponent implements OnInit {
  constructor(private apiservice: UsersDataService) {}
  data: any = [];
  displayedColumns: string[] = ['slno', 'name', 'type', 'status', 'tool'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  ngOnInit() {
    this.apiservice.user('users').subscribe((res: any) => {
      // console.log(res);
      this.data = res;
      this.dataSource = new MatTableDataSource<any>(this.data);
      console.log(this.dataSource);
    });
  }
}
