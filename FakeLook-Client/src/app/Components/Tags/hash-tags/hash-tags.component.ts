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
  selector: 'app-hash-tags',
  templateUrl: './hash-tags.component.html',
  styleUrls: ['./hash-tags.component.css']
})

export class HashTagsComponent implements OnInit {

  userId!: Number
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagsCtrl = new FormControl('');
  filterTags: Observable<string[]>;
  tags: string[] = [];
  allTags: Tag[] = [];
  allTagsName: string[] = [];
  @Input() enableAddTag: Boolean = false;
  @Input() tagsIds: Number[] = [];
 
  constructor(private tagService: TagService,
    private localStorageService: LocalStorageService) {

    this.filterTags = this.tagsCtrl.valueChanges.pipe(
      startWith(null),
      map((tagName: string | null) => (tagName ? this._filter(tagName) : this.allTagsName.slice())),
    );

  }

  async ngOnInit() {

    await this.tagService.getAllTags().then(res => {
      this.allTags = res;
    })
    this.allTags.map(tag => {
      this.tagData(tag);
    })
  }

  tagData(tag: Tag) {
    this.allTagsName.push(tag.TagName)
    console.log(this.allTagsName)
  }



  @ViewChild('tagsInput') tagsInput!: ElementRef<HTMLInputElement>;
  add(event: MatChipInputEvent): void {

    const value = (event.value || '').trim();
    if (this.enableAddTag && value.length > 2) {

      let str = '#' + value
      if (!this.allTagsName.find((tagName) => tagName == str)&&(!this.tags.find(tageName=>tageName==str))) {
        this.userId = this.localStorageService.get("user").UserId
        this.tagService.addTag(this.userId, str).then(res => {
          this.tags.push(str);
          this.tagsIds.push(res.TagId)
        })
      }
    }
    // Clear the input value
    event.chipInput!.clear();
    this.tagsCtrl.setValue(null);
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    debugger;
    if (!this.tags.find((tagName) => tagName == event.option.viewValue)) {
    this.tags.push(event.option.viewValue);
    }
    this.tagsInput.nativeElement.value = '';
    this.tagsCtrl.setValue(null);

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allTagsName.filter(tags => tags.toLowerCase().includes(filterValue));
  }
}

