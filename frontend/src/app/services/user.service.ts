import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User;
  users: User[];

  readonly URL_API = 'http://localhost:3000/api/v1/users'

  constructor(private http:HttpClient) {
    console.log("user service ON");
    this.selectedUser = new User();
    console.log(this.selectedUser);
  }
  
  getUsers () {
    return this.http.get(this.URL_API);
  }

  postUser (user: User) {
    return this.http.post(this.URL_API, user);
  }

  putUser (user: User) {
    return this.http.put(this.URL_API + `/${user._id}`, user);
  }

  deleteUser (_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
