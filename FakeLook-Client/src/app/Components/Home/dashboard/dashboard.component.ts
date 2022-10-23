import { Component, Input, OnInit} from '@angular/core';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';
import User from 'src/app/DataModels/User';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() selectedDisplay:string="Display Map";
  userId!:Number
  
  constructor(
    private router: Router,
    private authService: AuthService,
    private authGuard: AuthGuard,
    private localStorageService: LocalStorageService
  ) { }

  async ngOnInit() {
    this.authGuard.canActivate();
    this.userId= this.localStorageService.get('user').UserId;
    const me = await this.authService.me();
  }
  
  onProfile(){
    this.router.navigate(['editProfile']);
  }
}
