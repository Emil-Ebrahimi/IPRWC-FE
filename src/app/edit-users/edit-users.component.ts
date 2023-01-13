import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {


  constructor(private http: HttpClient) { }
  users: User[]=[];
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get<User[]>('/api/v1/user').pipe()
      .subscribe(user => {
          this.users = user;
        }
      )
  }
}
