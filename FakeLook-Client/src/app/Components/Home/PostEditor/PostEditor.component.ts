import { Component, EventEmitter, Inject, Input, OnInit, Output, } from '@angular/core';
import { FormBuilder, FormGroup,NumberValueAccessor,Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';
import { PostService } from 'src/app/Services/post.service';
import {MatChipInputEvent} from '@angular/material/chips';



@Component({
  selector: 'app-PostEditor',
  templateUrl: './PostEditor.component.html',
  styleUrls: ['./PostEditor.component.css']
})
export class PostEditorComponent implements OnInit {
  postForm: FormGroup<any>;
  lat!:Number;
  lng!:Number;
  file!:File;
  content!:string
  tagUsersState:boolean=false;
  @Input() hashTags!:Number[]
  @Input() userTags!:Number[]


    constructor(
    private router: Router,
    private fb: FormBuilder,
    private postService:PostService,
    private localStorageService: LocalStorageService,
    public dialogRef: MatDialogRef<PostEditorComponent>,
    
  ) {
    this.postForm = this.fb.group({
      title: ["", Validators.maxLength(50)],
      content: ["", Validators.required],
      photoUrl: ["", Validators.nullValidator],
      userId:this.localStorageService.get('user').UserId
    });
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition( (location)  =>  {
      this.lat = location.coords.latitude;
      this.lng = location.coords.longitude;
     })
  }
  changeContent(event:any)
  {
     this.content=event.target.value
     if(this.content[this.content.length-1]=='@')
     {
      this.tagUsersState=true;
     }
     else
     this.tagUsersState=false
  }

  async onSubmit() {
    const result= await this.postService.addPost(this.postForm.value,this.lng,this.lat);
    
    console.log("location "+this.lat,this.lng)
    this.onClose();
  }

 async inputImage(event:any){
  this.file = event.target.files[0];
  debugger;
  }

  onClose() {
 this.dialogRef.close();
  }


}
