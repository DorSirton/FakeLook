import { HttpClient } from '@angular/common/http';
import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';

import User from 'src/app/DataModels/User';
import { UserService } from 'src/app/Services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-FriendIcon',
  templateUrl: './FriendIcon.component.html',
  styleUrls: ['./FriendIcon.component.css']
})
export class FriendIconComponent implements OnInit {
  @Input() UserId!:Number;
  @Output() user!:User;
  constructor(private userService:UserService,
    private http: HttpClient) { }

  ngOnInit(): void {
   
   this.userService.getUserById(this.UserId).then(res=>{
     this.user=<User>res;
     console.log(this.user)
     
   })



  }

}
