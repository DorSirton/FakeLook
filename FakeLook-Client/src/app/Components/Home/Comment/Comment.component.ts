import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';
import Posts_Comments from 'src/app/DataModels/PostComments';
import { CommentsService } from 'src/app/Services/comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './Comment.component.html',
  styleUrls: ['./Comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comments!:Posts_Comments[]
  @Input() postId!:Number
  userId!:Number
  content:String=""
  constructor(private commentService:CommentsService,
    private localStorageService:LocalStorageService){

   }

  async ngOnInit() {
   this.userId= this.localStorageService.get('user').UserId
  await this.commentService.getAllComments(this.postId).then(res=>{
   this.comments=res;
  });
  
  }
  async addComment(){
    console.log(this.content)
   await this.commentService.addComment(this.userId,this.postId,this.content)
   this.ngOnInit() 
  }

}
