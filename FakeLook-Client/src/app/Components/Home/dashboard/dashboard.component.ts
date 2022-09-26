import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedDisplay:string="Display Map";
  constructor(
    private authService: AuthService
  ) { }

  async ngOnInit() {
    const me = await this.authService.me();
    console.log(me);
  }

}
