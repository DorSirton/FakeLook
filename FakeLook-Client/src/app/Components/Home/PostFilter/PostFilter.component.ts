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
  @Input()radius:any;
  @Input()date!:Date;
  @Input()tags!:Post_Tags[];

  @Input() selectedDisplay:string="Display Map";
  constructor(private router:Router,
    private localStorageService:LocalStorageService ) { }

   ngOnInit() {
   this.radius=this.localStorageService.getFilteredRadius();
  }
   displayRadius(range:Number)
  {
    this.radius=range
    this.localStorageService.setFilteredRadius(range.toString())
    this.router.navigate(['/login'])
    
  }

}
