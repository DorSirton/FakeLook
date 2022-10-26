import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';
import User from 'src/app/DataModels/User';
import Users_Friends from 'src/app/DataModels/UserFriends';
import { FriendsService } from 'src/app/Services/friends.service';
import { UserService } from 'src/app/Services/user.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { TagService } from 'src/app/Services/tags.service';
import Tag from 'src/app/DataModels/Tag';




@Component({
  selector: 'app-tag-users',
  templateUrl: './tag-users.component.html',
  styleUrls: ['./tag-users.component.css']
})


export class TagUsersComponent implements OnInit {

  separatorKeysCodes: number[] = [ENTER, COMMA];
  userCtrl = new FormControl('');
  filteredUsers: Observable<string[]>;
  users: string[] = [];
  userId!: Number
  usersFriends: Users_Friends[] = []
  allFriends: User[] = []
  allFriendsName: string[] = []
  allFriendsId: Number[] = [];



  constructor(private friendService: FriendsService,
    private localStorageService: LocalStorageService,
    private userService: UserService) {


    this.filteredUsers = this.userCtrl.valueChanges.pipe(
      startWith(null),
      map((userName: string | null) => (userName ? this._filter(userName) : this.allFriendsName.slice())),
    );

  }

  async ngOnInit() {
    this.userId = this.localStorageService.get('user').UserId;
    await this.friendService.getAllFriends(this.userId).then(res => {
      this.usersFriends = res;
    })
    this.usersFriends.map(user => {
      this.userData(user)
    })

  }

  userData(user: Users_Friends) {
    this.userService.getUserById(user.UserFriendId).then(userData => {
      this.allFriends.push(userData);
      this.allFriendsName.push(userData.UserName)
      this.allFriendsId.push(userData.UserId)
    })
  }

  @ViewChild('userInput') userInput!: ElementRef<HTMLInputElement>;
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our value
    if (this.allFriendsName.find((str)=>str==value)) {
      this.users.push(value);
    }
    // Clear the input value
    event.chipInput!.clear();
    this.userCtrl.setValue(null);
  }

  remove(user: string): void {
    const index = this.users.indexOf(user);

    if (index >= 0) {
      this.users.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.users.push(event.option.viewValue);
    this.userInput.nativeElement.value = '';
    this.userCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allFriendsName.filter(user => user.toLowerCase().includes(filterValue));
  }
}
