import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  selectedDisplay:string="Display Map";
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    const me = await this.authService.me();
    console.log(me);
  }
  logOut(){
    this.localStorageService.removeAccessToken();
    this.localStorageService.removeRefreshToken();
    this.localStorageService.remove('user');
    this.router.navigate(['login']);
    
  }

}
