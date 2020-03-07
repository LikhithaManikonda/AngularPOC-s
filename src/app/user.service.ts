import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url="/Users/a-8276/.m2/AngularPOC/UserRegistrationPortal/src/app/UserDetailsDocument.txt"
  constructor(private http:HttpClient) { }
  //To register the New user
  public doRegisterUser(user):Observable<any>{
      return this.http.post(this.url,user,{responseType:'text'});
  }
}
