import { Component } from '@angular/core';
import {IUser} from "./interfaces/app-interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: IUser[] = [
    {
      email: 'hasan@gmail.com',
      password: '123',
      address: 'urmia'
    },
    {
      email: 'asiye@gmail.com',
      password: '123',
      address: 'khoy'
    },
    {
      email: 'mohamad@gmail.com',
      password: '123',
      address: 'paris'
    },

  ];

  public onAddUser(email: string, password: string, address: string, e: Event) {
    e.preventDefault();
    let u: IUser = {
      email: email,
      password: password,
      address: address
    };
    this.users.push(u);
  }
}
