import { Component, Input, OnInit, SimpleChanges} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Loader } from '@googlemaps/js-api-loader';
import { LocalStorageService } from 'src/app/core/local-storage/local-storage.service';
import Post from 'src/app/DataModels/Post';
import { MapPostComponent } from './MapPost/MapPost.component';


@Component({
  selector: 'app-Map',
  templateUrl: './Map.component.html',
  styleUrls: ['./Map.component.css']
})
export class MapComponent implements OnInit {
  title = "google-maps";
  userId!:Number
  @Input() displayPosts!: Post[]
  showInfoWindow:boolean=false;

  
  constructor(private localStorageService : LocalStorageService,
    private dialog:MatDialog
  ) { }
  async ngOnInit(){
    this.userId = this.localStorageService.get('user').UserId;
  }
  navigateToPost(post:Post){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width='50%';
    dialogConfig.height='70%';
    dialogConfig.position
    dialogConfig.data={
      userId:post.UserId,
      photoUrl:post.PhotoUrl,
      content:post.Content,
      createDate:post.CreateDate,
      postId:post.PostId
    }
    const dialogRef= this.dialog.open(MapPostComponent,dialogConfig)
    }

  async ngOnChanges(changes: SimpleChanges) {
    {
      let loader = new Loader({
        apiKey: "AIzaSyCiQwG8IXqXBbZWMfy13-Gdlb_8tLwe_hw"
      });

      loader.load().then(() => {
        navigator.geolocation.getCurrentPosition((location) => {
          const centerLocation = {
            lng: location.coords.longitude,
            lat: location.coords.latitude
          }
          // console.log(centerLocation)
          const displayMap = new google.maps.Map(<HTMLElement>document.getElementById('map'), {
            center: centerLocation,
            zoom: 16
          })
          let Mymarker = new google.maps.Marker({
            position: centerLocation,
            map: displayMap,
            title: "My Location"
          })
          //console.log(this.displayPosts)
          this.displayPosts.forEach(element => {
            let loc = {
              lng: parseFloat(element.Longitude),
              lat: parseFloat(element.Latitude)
            }
            let image = {
              url: element.PhotoUrl,
              size: new google.maps.Size(180, 90),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(100, 100)
            }
            let shape = {
              coords: [0, 0, 60],
              type: 'circle'
          };
          

            let marker = new google.maps.Marker({
              position: loc,
              map: displayMap,
              title:element.Title,
              optimized:false,
              icon:image,
              shape:shape
            })
            
          
          
           marker.addListener('click', (event:any) => {
             // information.open(displayMap, marker);
             if(this.showInfoWindow)
             {
              this.navigateToPost(element)
              this.showInfoWindow=false;
             }
             else
             this.showInfoWindow=true;
           });
          
          });
        })
      });




    }
  }

}


