import { CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatPaginatorModule} from '@angular/material/paginator'
import { FidComponent } from './Components/Home/Fid/Fid.component';
import { FidPostComponent } from './Components/Home/Fid/FidPost/FidPost.component';
import { MapComponent } from './Components/Home/Map/Map.component';
import { MapPostComponent } from './Components/Home/Map/MapPost/MapPost.component';
import { PostEditorComponent } from './Components/Home/PostEditor/PostEditor.component';
import { PostFilterComponent } from './Components/Home/PostFilter/PostFilter.component';
import { FriendsCollectionComponent } from './Components/ManageFriends/FriendsCollection/FriendsCollection.component';
import { GroupCollectionComponent } from './Components/ManageFriends/ManageGroup/GroupCollection/GroupCollection.component';
import { GroupEdditorComponent } from './Components/ManageFriends/ManageGroup/GroupCollection/GroupEdditor/GroupEdditor.component';
import { NewFriendAddingComponent } from './Components/ManageFriends/NewFriendAdding/NewFriendAdding.component';
import { EditProfileComponent } from './Components/Profile/EditProfile/EditProfile.component';
import { UserPostsComponent } from './Components/Profile/UserPosts/UserPosts.component';
import { LoginComponent } from './Components/Start/Login/Login.component';
import { RegisterComponent } from './Components/Start/Register/Register.component';

@NgModule({
  declarations: [
    AppComponent,
    FidComponent,
    FidPostComponent,
    MapComponent,
    MapPostComponent,
    PostEditorComponent,
    PostFilterComponent,
    FriendsCollectionComponent,
    GroupCollectionComponent,
    GroupEdditorComponent,
    NewFriendAddingComponent,
    EditProfileComponent,
    UserPostsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
