import { Component } from '@angular/core';
import {IUser} from "./interfaces/app-interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: IUser[] = [];

  public userAdded(users: IUser[]) {
    this.users = users;
  }

}
