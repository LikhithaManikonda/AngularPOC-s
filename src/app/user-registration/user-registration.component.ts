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
   public fname:string
   lname:string
   gender:string
   email:string
   phoneNo:number
   user = new UserModel(this.fname,this.lname,this.gender,this.email,this.phoneNo);
   registrationSuccessMsg:String;

  ngOnInit(): void {
  }
  //For Registering the new user
  public registerUser(){
    if(this.fname!=undefined && this.lname!=undefined && this.email!=undefined && this.phoneNo!=0) {
    this.registrationSuccessMsg ="Congratulations "+this.fname+" your Registration is Success";}
    else {
      this.registrationSuccessMsg ="Please Enter all the details";
    }
   let response = this.service.doRegisterUser(this.user);
   response.subscribe((data)=>this.registrationSuccessMsg=data);
  }

  //for searching the user
  public searchUser() {

  }

}
