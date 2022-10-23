import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocialAuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  registerOrLogin({ email, password, userName }: { email: string, password: string, userName: string }): Promise<any> {
    return this.http.post(`${environment.api}/social-auth`, {
      email, password, userName
    }).toPromise();
  }

}
