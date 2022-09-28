import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';
import User from 'src/app/DataModels/User';
import Users_Friends from 'src/app/DataModels/UserFriends';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { FriendsService } from 'src/app/Services/friends.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-FriendsCollection',
  templateUrl: './FriendsCollection.component.html',
  styleUrls: ['./FriendsCollection.component.css']
})
export class FriendsCollectionComponent implements OnInit {
 

  @Output() friends: Users_Friends[] = [];
  index: Number=5;

  constructor(
    private router: Router,
    private friendService:FriendsService,
    private authGuard:AuthGuard,
    private localStorageService: LocalStorageService,
    private http: HttpClient
    ) { }

  ngOnInit() {
    const userId = this.localStorageService.get('user').UserId;
    this.friendService.getAllFriends(userId).then(res=>{
      console.log(res)
      this.friends=res
    });
  }  
  }



