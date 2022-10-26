import { NgModule } from '@angular/core';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/Home/dashboard/dashboard.component';
import { PostEditorComponent } from './Components/Home/PostEditor/PostEditor.component';
import { FriendsCollectionComponent } from './Components/ManageFriends/FriendsCollection/FriendsCollection.component';
import { EditProfileComponent } from './Components/Profile/EditProfile/EditProfile.component';
import { RestPasswordComponent } from './Components/Profile/RestPassword/RestPassword.component';
import { LoginGoogleComponent } from './Components/Start/Login/Login-Google/Login-Google.component';
import { LoginComponent } from './Components/Start/Login/Login.component';
import { RegisterComponent } from './Components/Start/Register/Register.component';
import { GlobalTagsComponent } from './Components/Tags/global-tags/global-tags.component';
import { TagUsersComponent } from './Components/Tags/tag-users/tag-users.component';



const routes: Routes = [
  // { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'editProfile', component: EditProfileComponent },
  { path: 'restPassword', component: RestPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'Login-Google', component: LoginGoogleComponent },
  { path: 'friendsCollection', component: FriendsCollectionComponent },
  { path: 'postEditor', component: PostEditorComponent },
  { path: 'profileIcon', component: TagUsersComponent},
  { path: 'profileIconAdd', component: GlobalTagsComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
