
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup<any>;


  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    private localStorageService: LocalStorageService,
  ) {
    this.loginForm = this.fb.group({
      email: ["", Validators.email],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }


  async onSubmit() {
    const { accessToken, refreshToken } = await this.authService.login(this.loginForm.value);
    this.localStorageService.setAccessToken(accessToken);
    this.localStorageService.setRefreshToken(refreshToken);

    const me = await this.authService.me();
    this.localStorageService.set('user', me);
    this.router.navigate(['dashboard']);
  }

  navigateToRegistration() {
    this.router.navigate(['register']);
  }

}
