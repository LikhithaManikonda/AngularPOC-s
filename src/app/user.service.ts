import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { UserModel } from './UserModel';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  //later the url should be changed with the API 
  //Endpoints of the API ideally should be as
  //doRegister: localhost:8080/Register/user
  //doRetrieve: localhost:8080/RetrieveUsers
  //doDelete: localhost:8080/delete/userEmail (based on email id)
  private url="/Users/a-8276/.m2/AngularPOC/UserRegistrationPortal/src/app/UserDetailsDocument.txt"
  constructor(private http:HttpClient) { }
  //To register the New user
  public doRegisterUser(user):Observable<any>{
      return this.http.post(this.url,user,{responseType:'text'});
  }
  //To Retrieve the users
  public getUsers():Observable<any> {
      return this.http.get(this.url);
  }
  //To delete the users
  public doDeleteUser( userEmail:String):Observable<any>{
    return this.http.post(this.url,userEmail,{responseType:'text'});
}
}
