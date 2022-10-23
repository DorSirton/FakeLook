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


  async getUserFriendsPosts(usersIdArray: Number[], radiusParam: Number, myLng: Number, myLat: Number,toDate:Date,fromDate:Date): Promise<any> {
    return this.http.get(`${environment.api}/posts?usersIdArray=${usersIdArray}&radius=${radiusParam}&myLng=${myLng}&myLat=${myLat}&toDate=${toDate}&fromDate=${fromDate}`,).toPromise()
  }

  async addPost({ title, content, photoUrl,userId}:{title:String, content:String, photoUrl:File,userId:Number}, lan:Number, lat:Number): Promise<any>{
    this.http.post(`${environment.api}/posts`,{
      title, content, photoUrl,userId, lan, lat
     },).toPromise()
  }


  
}

