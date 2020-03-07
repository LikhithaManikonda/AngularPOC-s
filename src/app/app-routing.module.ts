import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { SearchComponent } from './search/search.component';


//for routing
const routes: Routes = [
  {path:"",redirectTo:"register",pathMatch:"full"},
  {path:'register',component:UserRegistrationComponent},
  {path:'search',component:SearchComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
