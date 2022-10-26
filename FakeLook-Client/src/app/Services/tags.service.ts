import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  constructor(
    private http: HttpClient
  ) { }

  async getAllTags(): Promise<any> {
    return this.http.get(`${environment.api}/tags`).toPromise()
  }
  async addTag(userId:Number,content:String): Promise<any>{
    this.http.post(`${environment.api}/tags`,{
      userId, content
     },).toPromise()
  } 
  async addHashTagToPost(postId:Number,hashTagsIds:Number[]): Promise<any>{
    this.http.post(`${environment.api}/tags`,{
      postId,hashTagsIds
     },).toPromise()
    }
}

