
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatPaginatorModule } from '@angular/material/paginator'
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
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { DashboardComponent } from './Components/Home/dashboard/dashboard.component';
import { FriendIconComponent } from './Components/ManageFriends/FriendIcon/FriendIcon.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GeneralPostComponent } from './Components/Home/GeneralPost/GeneralPost.component';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { LikeComponent } from './Components/Home/Like/Like.component';
import { CommentComponent } from './Components/Home/Comment/Comment.component';

import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider} from '@abacritt/angularx-social-login';
import { LoginGoogleComponent } from './Components/Start/Login/Login-Google/Login-Google.component';
import { RestPasswordComponent } from './Components/Profile/RestPassword/RestPassword.component';
import { TagUsersComponent } from './Components/Tags/tag-users/tag-users.component';
import {MatChipsModule, MAT_CHIPS_DEFAULT_OPTIONS} from '@angular/material/chips'
import {MatFormFieldModule} from '@angular/material/form-field';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { GlobalTagsComponent } from './Components/Tags/global-tags/global-tags.component';
import { HashTagsComponent } from './Components/Tags/hash-tags/hash-tags.component';





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
    RegisterComponent,
    DashboardComponent,
    FriendIconComponent,
    GeneralPostComponent,
    LikeComponent,
    CommentComponent,
    LoginGoogleComponent,
    RestPasswordComponent,
    TagUsersComponent,
    GlobalTagsComponent,
    HashTagsComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    SocialLoginModule,
    MatDialogModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatAutocompleteModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
    provide: MAT_CHIPS_DEFAULT_OPTIONS,
    useValue: {
      separatorKeyCodes: [ENTER, COMMA]
    }
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '320284881765-bdt17951bom3r4fh992rkjaf1vhb4elb.apps.googleusercontent.com'

            )
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent],
  entryComponents:[PostEditorComponent,MapPostComponent,TagUsersComponent]
})
export class AppModule { }
