import { Component, EventEmitter, Inject, Input, OnInit, Output, } from '@angular/core';
import { FormBuilder, FormGroup,NumberValueAccessor,Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';
import { PostService } from 'src/app/Services/post.service';


@Component({
  selector: 'app-PostEditor',
  templateUrl: './PostEditor.component.html',
  styleUrls: ['./PostEditor.component.css']
})
export class PostEditorComponent implements OnInit {

  postForm: FormGroup<any>;
  lat!:Number;
  lng!:Number;

    constructor(
    private router: Router,
    private fb: FormBuilder,
    private postService:PostService,
    private localStorageService: LocalStorageService,
    public dialogRef: MatDialogRef<PostEditorComponent>

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
 

  async onSubmit() {
    const result= await this.postService.addPost(this.postForm.value,this.lng,this.lat);
    console.log("location "+this.lat,this.lng)
    this.onClose();
  }
  onClose() {
 this.dialogRef.close();
  }


}
