import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  constructor(
    private http: HttpClient
  ) { }

async getAllComments(postId:Number): Promise<any> {
    return this.http.get(`${environment.api}/comments/`+postId,{
    }).toPromise();
  }
  async addComment(userId:Number,postId:Number,content:String):Promise<any>{
    return this.http.post(`${environment.api}/comments`,{
      userId,postId,content
    }).toPromise();
  }
}