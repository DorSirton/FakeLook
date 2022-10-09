import { Component, Input, OnInit, Output } from '@angular/core';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';
import Post from 'src/app/DataModels/Post';
import User from 'src/app/DataModels/User';
import Users_Friends from 'src/app/DataModels/UserFriends';
import { FriendsService } from 'src/app/Services/friends.service';
import { PostService } from 'src/app/Services/post.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-GeneralPost',
  templateUrl: './GeneralPost.component.html',
  styleUrls: ['./GeneralPost.component.css']
})
export class GeneralPostComponent implements OnInit {

  @Input() selectedDisplay:string = "";
  @Input() displayPosts!: Post[];
  @Input() showPostEditor!:boolean
  @Input() lng!:Number;
  @Input() lat!:Number;

  user!: User;
  userFriends: Users_Friends[] = [];
  userFriendsId: Number[] = []
  selectedRadiusRange: Number = 0;
  
  constructor(
    private localStorageService: LocalStorageService,
    private friendsService: FriendsService,
    private userService: UserService,
    private postService: PostService
  ) { }

  async ngOnInit() {
    
    const userId = this.localStorageService.get('user').UserId;
    this.userService.getUserById(userId).then(res => {
    this.user = <User>res;//ask why?? 
    });
    await this.friendsService.getAllFriends(userId).then(res => {
    this.userFriends = res;
    });
    this.userFriends.forEach(element => {
    this.userFriendsId.push(element.UserFriendId)
    });

     navigator.geolocation.getCurrentPosition( (location)  =>  {
     this.lat = location.coords.latitude;
     this.lng = location.coords.longitude;
    })

    await this.postService.getUserFriendsPosts(this.userFriendsId, 40, this.lng, this.lat)
    .then(res => {
     this.displayPosts = res;
    // console.log(this.displayPosts)
    })
  }

}
