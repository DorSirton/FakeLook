import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LikesService {
  constructor(
    private http: HttpClient
  ) { }

async getAllLikes(postId:Number): Promise<any> {
    return this.http.get(`${environment.api}/likes/`+postId,{
    }).toPromise();
  }
  async addLike(userId:Number,postId:Number):Promise<any>{
    return this.http.post(`${environment.api}/likes`,{
      userId,postId
    }).toPromise();
  }
}