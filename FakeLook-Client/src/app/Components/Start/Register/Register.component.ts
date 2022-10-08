import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { observable } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup<any>;
  selectedFile: File | null = null;
  message: string ="";


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private http: HttpClient

  ) {
    this.registrationForm = this.fb.group({
      userName: ["", Validators.required],
      email: ["", Validators.email],
      password: ['', Validators.required],
      birthDate: ['', Validators.required],
      ProfilePicture:['', Validators.required]

    });
  }

  ngOnInit() {
  }

  navigateToLogin() {
    this.router.navigate(['login']);
  }

  onFileSelected(event : any){
  this.selectedFile = <File>event.target.files[0];    
  }

  onUpload(){
    console.log(this.selectedFile);
    const uploadImageData  = new FormData();
    if(this.selectedFile)
    uploadImageData.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post(`${environment.api}` +'/users/image',uploadImageData ,  { observe:'response' })
          .subscribe((response) => {
            if ( response.status === 200) {
              this.message = 'Image uploaded successfully';
            } else {
              this.message = 'Image not uploaded successfully';
            }});  
      }


  async onSubmit() {
    console.log(this.registrationForm.value);
    const result = await this.authService.registration(this.registrationForm.value);
    this.router.navigate(['login']);
  }



}
