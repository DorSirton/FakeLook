import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { Router } from '@angular/router';
import { SocialUser } from "@abacritt/angularx-social-login";
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { SocialAuthenticationService } from 'src/app/Services/social-authentication.service';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';
import { AuthService } from 'src/app/Services/auth.service';



@Component({
  selector: 'app-login-google',
  templateUrl: './Login-Google.component.html',
  styleUrls: ['./Login-Google.component.css']
})
export class LoginGoogleComponent implements OnInit {

  private accessToken = '';
  user: SocialUser | any;
  loggedIn: boolean = true;
  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean;

  constructor(
    private router: Router,
    private socialAuthService: SocialAuthService,
    private socialAuthenticationService: SocialAuthenticationService,
    private localStorageService: LocalStorageService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.socialAuthService.authState.subscribe(async (user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;

      const { email, id, name } = this.socialUser;
      const { accessToken, refreshToken } = await this.socialAuthenticationService.registerOrLogin({ email, password: id, userName: name });
      this.localStorageService.setAccessToken(accessToken);
      this.localStorageService.setRefreshToken(refreshToken);

      const me = await this.authService.me();
      this.localStorageService.set('user', me);
      this.router.navigate(['dashboard']);
    });
  }

  async loginWithGoogle() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  // getAccessToken(): void {
  //   this.socialAuthService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => this.accessToken = accessToken);
  // }

  // refreshToken(): void {
  //   this.socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  // }

  signOut(): void {
    this.socialAuthService.signOut();
  }

}
