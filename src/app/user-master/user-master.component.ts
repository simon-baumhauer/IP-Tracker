import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.scss'],
})
export class UserMasterComponent implements OnInit {
  userList: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((results: any) => {
        this.userList = results;
      });
  }
}
