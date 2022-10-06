import { Component, Input, OnInit, SimpleChanges} from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import Post from 'src/app/DataModels/Post';


@Component({
  selector: 'app-Map',
  templateUrl: './Map.component.html',
  styleUrls: ['./Map.component.css']
})
export class MapComponent implements OnInit {
  title = "google-maps";
  @Input() displayPosts!: Post[]
  constructor(
  ) { }
  async ngOnInit(){}

  async ngOnChanges(changes: SimpleChanges) { {
    let loader = new Loader({
      apiKey: "AIzaSyCiQwG8IXqXBbZWMfy13-Gdlb_8tLwe_hw"
    });
    
    loader.load().then(() => {
      navigator.geolocation.getCurrentPosition((location) => {
        const centerLocation = {
          lng: location.coords.longitude,
          lat: location.coords.latitude
        }
        console.log(centerLocation)
        const displayMap = new google.maps.Map(<HTMLElement>document.getElementById('map'), {
          center: centerLocation,
          zoom: 16
        })
        let Mymarker = new google.maps.Marker({
          position: centerLocation,
          map: displayMap,
          
        })
        console.log(this.displayPosts)
          this.displayPosts.forEach(element => {
            let loc = {
              lng:parseFloat(element.Longitude),
              lat:parseFloat(element.Latitude)
            }
            let marker = new google.maps.Marker({
              position: loc,
              map: displayMap,
              icon : {
                path:element.PhotoUrl,
                
                
              } 
            })
            var information = new google.maps.InfoWindow({
              content: `<div><div class="userPostDetails"><h1>blbllb : </h1><img src=${element.PhotoUrl}></div><div class="post-detailes"><img src="post.image"><p>${element.Content}</p><p>Publish Date</p> <p>Number Of Likes ""</p><button>Like</button></div></div>`
           });
        
           marker.addListener('click', function() {
              information.open(displayMap, marker);
           });
          });
        })

      });

    


    }
  }

}


