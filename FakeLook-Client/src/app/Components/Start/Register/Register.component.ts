import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup<any>;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService

  ) {
    this.registrationForm = this.fb.group({
      userName: ["", Validators.required],
      email: ["", Validators.email],
      password: ['', Validators.required],
      birthDate: ['', Validators.required],

    });
  }

  ngOnInit() {
  }

  navigateToLogin() {
    this.router.navigate(['login']);
  }

  async onSubmit() {
    console.log(this.registrationForm.value);
    const result = await this.authService.registration(this.registrationForm.value);
    this.router.navigate([]);
  }

}
