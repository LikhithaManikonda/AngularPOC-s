import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { SearchComponent } from './search/search.component';
import { from } from 'rxjs';
import { UserDetailsComponent } from './user-details/user-details.component';
import { DeleteComponent } from './delete/delete.component';
//for routing
const routes: Routes = [
  {path:"",redirectTo:"register",pathMatch:"full"},
  {path:'register',component:UserRegistrationComponent},
  {path:'search',component:SearchComponent},
  {path:'details',component:UserDetailsComponent},
  {path:'delete',component:DeleteComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
