import { Component, OnInit } from '@angular/core';
import { UserModel } from '../UserModel';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  users:UserModel[];
  userCheck = ["hey","hii","hello"];
  registerUsersMsg:string;
  constructor(private service:UserService) { }

  ngOnInit(): void {
  }
 //retrieving the user
 public getUsers() {
  this.registerUsersMsg="Registered user details";
  let response= this.service.getUsers();
  response.subscribe((data)=>this.users=data);
}
}
