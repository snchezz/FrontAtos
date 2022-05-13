import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/_services/user.service';
@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.css']
})
export class MenuUserComponent implements OnInit {

  content?: string;
  constructor(private userService: UserService) { }
  ngOnInit(): void {
  this.userService.getUserBoard().subscribe(
  data => {
  this.content = data;
  },
  err => {
  this.content = JSON.parse(err.error).message;
  }
  );
  }
  }
