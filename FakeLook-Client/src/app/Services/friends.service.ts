import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Users_Friends from '../DataModels/UserFriends';
@Injectable({
  providedIn: 'root'
})
export class FriendsService {


// New Friend Component + 
// Friends Collection Component 

constructor(
  private http: HttpClient,
) {
 }


async getAllFriends(UserId: number): Promise<any> {
  return this.http.get(`${environment.api}/friends/`+UserId, {
    
  }).toPromise()
  
}

}
