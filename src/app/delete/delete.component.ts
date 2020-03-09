import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from '../UserModel';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  dataFromAPI:any
  users:UserModel[]
  fname:String
  lname:String
  email:String
  gender:String
  phoneno:number
  successfulDeleteMsg:string
  constructor(private service:UserService) { }
  ngOnInit(): void {
  //let response= this.service.getUsers();
  //response.subscribe((data)=>this.users=data);
  //currently hardcoded later need to retrieve into UserModel from DB through API
  this.fname="likhitha";
  this.lname="Manikonda";
  this.email="likhithamanikonda6@gmail.com"
  this.gender="female"
  this.phoneno=8888888888
  }
  public deleteUser(UserEmailId:String) {
    this.successfulDeleteMsg= "Deleted Successfully"
    this.service.doDeleteUser(UserEmailId);
    let response= this.service.getUsers();
  response.subscribe((data)=>this.dataFromAPI=data);
  }

}
