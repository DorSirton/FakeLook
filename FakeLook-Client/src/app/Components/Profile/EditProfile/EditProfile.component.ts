import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-EditProfile',
  templateUrl: './EditProfile.component.html',
  styleUrls: ['./EditProfile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(
    private router: Router
      ) { }

  ngOnInit() {

  }
  ToRestPassword(){
    this.router.navigate(['restPassword']);
  }

}
