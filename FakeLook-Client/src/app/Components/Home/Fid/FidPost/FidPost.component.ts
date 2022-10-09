import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';
import Post from 'src/app/DataModels/Post';
import User from 'src/app/DataModels/User';
import Users_Likes from 'src/app/DataModels/UserLikes';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-FidPost',
  templateUrl: './FidPost.component.html',
  styleUrls: ['./FidPost.component.css']
})
export class FidPostComponent implements OnInit {

  @Input() post!:Post
  @Input()likes!:Users_Likes[]
  alredyliked!:Boolean;
  userId!:Number;
  constructor(private postService: PostService,
    private localStorageService: LocalStorageService,
    private router : Router
    ) { }
  

  async ngOnInit() {
  this.userId=this.localStorageService.get('user').UserId;
  await this.getLikes()
  }

  async addLike(){
    await this.postService.addLike(this.userId,this.post.PostId);
    this.ngOnInit();
  }
  async getLikes()
  {
    this.alredyliked=false
    await this.postService.getAllLikes(this.post.PostId).then(res=>{
      this.likes=res;
    })
     this.likes.forEach(like=>{
     if(like.UserId==this.userId)
     this.alredyliked=true;
     }
     )
    }
  }

