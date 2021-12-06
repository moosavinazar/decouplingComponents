import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../interfaces/app-interface";

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {

  @Input() users: IUser[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
