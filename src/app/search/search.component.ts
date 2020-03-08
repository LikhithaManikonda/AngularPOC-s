import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from '../UserModel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  users:UserModel[];
  constructor(private service:UserService) { }
  ngOnInit(): void {
  }

 
}
