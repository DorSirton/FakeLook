import { HttpClient } from '@angular/common/http';
import User from '../DataModels/User';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

 async getUserById(id:Number):Promise<any>{
       return this.http.get(`${environment.api}/users/`+id
      ).toPromise()
 }
}
