import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private localStorageService:LocalStorageService
    
  ) { }

  async registration({ userName, email, password, birthDate }: { userName: string, email: string, password: string, birthDate: Date }) {
    return this.http.post(`${environment.api}/users`, {
      userName, email, password, birthDate
    }).toPromise();
  }
  async logout(){
   this.localStorageService.remove('user');
   this.localStorageService.remove('access_token');
   this.localStorageService.remove('refresh_token');
  }


  async login({ email, password }: { email: string, password: string }): Promise<any> {
    return this.http.post(`${environment.api}/auth/login`, {
      email, password
    }).toPromise();
  }

  async me() {
    return this.http.get(`${environment.api}/auth/me`).toPromise();
  }
}
