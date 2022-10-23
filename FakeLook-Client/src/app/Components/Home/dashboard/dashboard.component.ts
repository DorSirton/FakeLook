import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';
import User from 'src/app/DataModels/User';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AuthService } from 'src/app/Services/auth.service';
import {MatDialog, MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import { PostEditorComponent } from '../PostEditor/PostEditor.component';
import { UserService } from 'src/app/Services/user.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  filterOpen:boolean=true;
  @Input() selectedDisplay:any;
  userId!:Number
  user!:User

  //@Output() showPostEditor:boolean=false;
  
  constructor(
    private authService: AuthService,
    private authGuard: AuthGuard,
    private localStorageService: LocalStorageService,
    private userService:UserService,
    private dialog:MatDialog
      ) { }

  navigateToPostEditor(){
  const dialogConfig=new MatDialogConfig();
  dialogConfig.disableClose=true;
  dialogConfig.autoFocus=true;
  dialogConfig.width='50%';
  dialogConfig.height='70%';
  dialogConfig.position
  const dialogRef= this.dialog.open(PostEditorComponent,dialogConfig)
  }

  async ngOnInit() {
    this.authGuard.canActivate();

    if(this.localStorageService.getDisplayPost()==null){
      this.selectedDisplay="Display Map";
      this.localStorageService.setDisplayPost(this.selectedDisplay)
    }
    else 
      this.selectedDisplay = this.localStorageService.getDisplayPost();

    this.userId= this.localStorageService.get('user').UserId;
    this.user=await this.userService.getUserById(this.userId);
    const me = await this.authService.me();
   
  }
  closeOpenFilter(){
    if(this.filterOpen)
    this.filterOpen=false;
    else
    this.filterOpen=true;
  }
  displayChange(){
    debugger;
    if(this.localStorageService.getDisplayPost()=="Display Map")
    this.localStorageService.setDisplayPost("Display Fid")
    else 
    this.localStorageService.setDisplayPost("Display Map")

    this.selectedDisplay=this.localStorageService.getDisplayPost();
  }

  logOut()
  {
    this.authService.logout();
    this.router.navigate(["/login"])
  }
  
  onProfile(){
    this.router.navigate(['editProfile']);
  }
}
