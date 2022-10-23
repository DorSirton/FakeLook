import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';
import Post_Tags from 'src/app/DataModels/PostTags';

@Component({
  selector: 'app-PostFilter',
  templateUrl: './PostFilter.component.html',
  styleUrls: ['./PostFilter.component.css']
})
export class PostFilterComponent implements OnInit {
  @Input() radius: any;
  @Input() toDay: any;
  @Input() fromDay: any;
  @Input() tags!: Post_Tags[];

  @Input() selectedDisplay: string = "Display Map";
  constructor(private router: Router,
    private localStorageService: LocalStorageService) { }

  ngOnInit() {
    if (!this.localStorageService.getFilteredFromDate() && !this.localStorageService.getFilteredToDate()) {
      this.toDay = new Date()
      this.fromDay = new Date(this.toDay.getFullYear(), this.toDay.getMonth(), this.toDay.getDate() - 7);

      this.fromDay = this.fromDay.toLocaleDateString('en-CA');
      this.toDay = new Date().toLocaleDateString('en-CA');

      this.localStorageService.setFilteredToDate(this.toDay);
      this.localStorageService.setFilteredFromDate(this.fromDay);
    }
    else {
      this.fromDay = this.localStorageService.getFilteredFromDate();
      this.toDay = this.localStorageService.getFilteredToDate();
      
    }

    this.radius = this.localStorageService.getFilteredRadius();
  }
  toDateChange(toDate: string) {
    this.toDay=toDate;
    this.localStorageService.setFilteredToDate(this.toDay);
    this.router.navigate(['/login'])
    
  }
  fromDateChange(fromDate: string) {
    this.fromDay=fromDate;
    this.localStorageService.setFilteredFromDate(this.fromDay);
    this.router.navigate(['/login'])
  }


  displayRadius(range: Number) {
    this.radius = range
    this.localStorageService.setFilteredRadius(range.toString())
    this.router.navigate(['/login'])
  }


}
