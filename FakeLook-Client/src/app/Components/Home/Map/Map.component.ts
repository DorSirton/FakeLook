import { Component, OnInit, Output } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';
import Post from 'src/app/DataModels/Post';
import User from 'src/app/DataModels/User';
import Users_Friends from 'src/app/DataModels/UserFriends';
import { FriendsService } from 'src/app/Services/friends.service';
import { PostService } from 'src/app/Services/post.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-Map',
  templateUrl: './Map.component.html',
  styleUrls: ['./Map.component.css']
})
export class MapComponent implements OnInit {
  title = "google-maps";
  user!: User;
  userFriends: Users_Friends[] = [];
  userFriendsId: Number[] = []
  selectedRadiusRange: Number = 0;
  displayPosts!: Post[]
  constructor(
    private localStorageService: LocalStorageService,
    private friendsService: FriendsService,
    private userService: UserService,
    private postService: PostService
  ) { }

  async ngOnInit() {
    const userId = this.localStorageService.get('user').UserId;
    this.userService.getUserById(userId).then(res => {
      this.user = <User>res;
    });

    await this.friendsService.getAllFriends(userId).then(res => {
      this.userFriends = res;
    });
    this.userFriends.forEach(element => {
      this.userFriendsId.push(element.UserFriendId)
    });

    let loader = new Loader({
      apiKey: "AIzaSyCiQwG8IXqXBbZWMfy13-Gdlb_8tLwe_hw"
    });

    loader.load().then(() => {
      navigator.geolocation.getCurrentPosition((location) => {
        const centerLocation = {
          lng: location.coords.longitude,
          lat: location.coords.latitude
        }
        console.log(centerLocation)
        const displayMap = new google.maps.Map(<HTMLElement>document.getElementById('map'), {
          center: centerLocation,
          zoom: 16
        })
        
        this.postService.getUserFriendsPosts(this.userFriendsId, 40, centerLocation.lng, centerLocation.lat).then(res => {
          this.displayPosts = res;
          this.displayPosts.forEach(element => {
            console.log(element.Longitude, element.Latitude)
            let loc = {
              lng:parseFloat(element.Longitude),
              lat:parseFloat(element.Latitude)
            }
            let marker = new google.maps.Marker({
              position: loc,
              map: displayMap,
            })
            var information = new google.maps.InfoWindow({
              content: `<div><div class="userPostDetails"><h1>blbllb : </h1><img src=${element.PhotoUrl}></div><div class="post-detailes"><img src="post.image"><p>${element.Content}</p><p>Publish Date</p> <p>Number Of Likes ""</p><button>Like</button></div></div>`
           });
        
           marker.addListener('click', function() {
              information.open(displayMap, marker);
           });
          });
        })

      });

    });



  }

}


