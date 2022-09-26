import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/Home/dashboard/dashboard.component';
import { FriendsCollectionComponent } from './Components/ManageFriends/FriendsCollection/FriendsCollection.component';
import { LoginComponent } from './Components/Start/Login/Login.component';
import { RegisterComponent } from './Components/Start/Register/Register.component';



const routes: Routes = [
  // { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'friendsCollection', component: FriendsCollectionComponent }

]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
