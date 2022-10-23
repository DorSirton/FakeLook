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

  @Input() selectedDisplay: string = "";
  @Input() displayPosts!: Post[];
  @Input() showPostEditor!: boolean
  myLocation!:{lat:Number,lng:Number}
  radius:any;
  toDate:any;
  fromDate:any;

  user!: User;
  userFriends: Users_Friends[] = [];
  userFriendsId: Number[] = []


  constructor(
    private localStorageService: LocalStorageService,
    private friendsService: FriendsService,
    private userService: UserService,
    private postService: PostService
  ) {
    navigator.geolocation.getCurrentPosition((location) => {
      this.myLocation = {
       lat: location.coords.latitude,
       lng: location.coords.longitude
     }
   })
   }

  async ngOnInit() {

    const userId = this.localStorageService.get('user').UserId;
    await this.friendsService.getAllFriends(userId).then(res => {
      this.userFriends = res;
    });
    this.userFriends.forEach(element => {
      this.userFriendsId.push(element.UserFriendId)
    });
   this.radius=this.localStorageService.getFilteredRadius(); 
   this.toDate=this.localStorageService.getFilteredToDate();     
   this.fromDate=this.localStorageService.getFilteredFromDate();

   this.toDate=new Date(this.toDate);
   this.fromDate=new Date(this.fromDate);
    await this.postService.getUserFriendsPosts(this.userFriendsId,parseInt(this.radius), this.myLocation.lng, this.myLocation.lat,this.toDate,this.fromDate)
      .then(res => {
        this.displayPosts = res;
      })
  }

}
