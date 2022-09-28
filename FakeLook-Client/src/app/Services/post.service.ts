import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(
    private http: HttpClient
  ) { }


  async getUserFriendsPosts(usersIdArray: Number[], radiusParam: Number, myLng: Number, myLat: Number): Promise<any> {
    debugger;
    return this.http.get(`${environment.api}/posts?usersIdArray=${usersIdArray}&radius=${radiusParam}&myLng=${myLng}&myLat=${myLat}`).toPromise()
  }
}

