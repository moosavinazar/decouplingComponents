import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IUser} from "../interfaces/app-interface";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

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

  @Output() onAddUserClicked = new EventEmitter<IUser[]>();

  constructor() { }

  ngOnInit(): void {
  }

  public onAddUser(email: string, password: string, address: string, e: Event) {
    e.preventDefault();
    let u: IUser = {
      email: email,
      password: password,
      address: address
    };
    this.users.push(u);
    this.onAddUserClicked.emit(this.users);
  }

}
