import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-RestPassword',
  templateUrl: './RestPassword.component.html',
  styleUrls: ['./RestPassword.component.css']
})
export class RestPasswordComponent implements OnInit {

  constructor(
    private http: HttpClient

  ) { }

  ngOnInit() {
  }


  async VerificationOfDetails({ email, password }: { email: string, password: string }): Promise<any> {
    return this.http.post(`${environment.api}/auth/login`, {
      email, password
    }).toPromise();
  }
}
