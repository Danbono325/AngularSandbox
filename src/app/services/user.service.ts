import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { of } from "rxjs";

import { User } from "../models/User";

@Injectable({
  providedIn: "root"
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: "Jim",
        lastName: "Halpert",
        email: "jim@gmail.com",
        isActive: true,
        registered: new Date("11/10/1998 08:30:00"),
        hide: true
      },
      {
        firstName: "Pam",
        lastName: "Halpert",
        email: "pam@gmail.com",
        isActive: false,
        registered: new Date("11/09/1998 08:30:00"),
        hide: true
      },
      {
        firstName: "Dwight",
        lastName: "Schrute",
        email: "dwight@gmail.com",
        isActive: true,
        registered: new Date("11/02/1998 08:30:00"),
        hide: true
      }
    ];
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next(4);
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
