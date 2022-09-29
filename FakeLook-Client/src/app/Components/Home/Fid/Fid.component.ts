import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';
import Post from 'src/app/DataModels/Post';
import User from 'src/app/DataModels/User';
import Users_Friends from 'src/app/DataModels/UserFriends';
import { FriendsService } from 'src/app/Services/friends.service';
import { PostService } from 'src/app/Services/post.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-Fid',
  templateUrl: './Fid.component.html',
  styleUrls: ['./Fid.component.css']
})
export class FidComponent implements OnInit {

  user!: User;
  userFriends: Users_Friends[] = [];
  userFriendsId: Number[] = []
  selectedRadiusRange: Number = 0;
  @Input() displayPosts!: Post[];
  
  constructor(
  ) { }

  async ngOnInit() {
    // const userId = this.localStorageService.get('user').UserId;
    // this.userService.getUserById(userId).then(res => {
    //   this.user = <User>res;
    // });

    // await this.friendsService.getAllFriends(userId).then(res => {
    //   this.userFriends = res;
    // });
    // this.userFriends.forEach(element => {
    //   this.userFriendsId.push(element.UserFriendId)
    // });

  }



    

}

