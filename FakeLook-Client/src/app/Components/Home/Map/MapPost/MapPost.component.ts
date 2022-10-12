import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostEditorComponent } from '../../PostEditor/PostEditor.component';

@Component({
  selector: 'app-MapPost',
  templateUrl: './MapPost.component.html',
  styleUrls: ['./MapPost.component.css']
})
export class MapPostComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {userId:Number,
    photoUrl:String,
    content:String,
    createDate:Date,
    postId:Number},
    public dialogRef: MatDialogRef<PostEditorComponent>
  ) { }

  ngOnInit() {
  }
  onClose() {
    this.dialogRef.close();
    
     }

}
