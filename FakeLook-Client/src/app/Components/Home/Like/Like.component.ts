import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';
import Post from 'src/app/DataModels/Post';
import Users_Likes from 'src/app/DataModels/UserLikes';
import { LikesService } from 'src/app/Services/likes.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() postId!:Number
  likes!:Users_Likes[]
  alredyliked!:Boolean;
  @Input()userId!:Number;
  constructor(private likesService: LikesService,
    private router : Router
    ) { }


  async ngOnInit() {
  await this.getLikes()
  }

  async addLike(){
    await this.likesService.addLike(this.userId,this.postId);
    this.ngOnInit();
  }
  async getLikes()
  {
    this.alredyliked=false
    await this.likesService.getAllLikes(this.postId).then(res=>{
      this.likes=res;
    })
     this.likes.forEach(like=>{
     if(like.UserId==this.userId)
     this.alredyliked=true;
     }
     )
    }

}
