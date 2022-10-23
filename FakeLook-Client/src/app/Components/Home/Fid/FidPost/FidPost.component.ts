import { Component, Input, OnInit } from '@angular/core';
import Post from 'src/app/DataModels/Post';

@Component({
  selector: 'app-FidPost',
  templateUrl: './FidPost.component.html',
  styleUrls: ['./FidPost.component.css']
})
export class FidPostComponent implements OnInit {

  @Input() post!:Post
  constructor() { }

  ngOnInit() {
  }

}
