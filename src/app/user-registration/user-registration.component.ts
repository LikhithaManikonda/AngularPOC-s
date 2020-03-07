import { Component, OnInit } from '@angular/core';
import { UserModel } from '../UserModel';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  constructor(private service:UserService) { }

   user: UserModel = new UserModel("","","","",8897416854);
   registrationSuccessMsg:String;

  ngOnInit(): void {
  }
  public registerUser(){
   let response = this.service.doRegisterUser(this.user);
   response.subscribe((data)=>this.registrationSuccessMsg=data);
  }

}
