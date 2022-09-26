import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import User from 'src/app/DataModels/User';

@Component({
  selector: 'app-Map',
  templateUrl: './Map.component.html',
  styleUrls: ['./Map.component.css']
})
export class MapComponent implements OnInit {
  title = "google-maps";
  
  constructor() { }

  ngOnInit() {
    
    let loader = new Loader({
      apiKey:"AIzaSyCiQwG8IXqXBbZWMfy13-Gdlb_8tLwe_hw"
    });
    loader.load().then(()=>{
      console.log("loaded map")
      const centerLocation = {
        lng:34.841011,
        lat:32.081669
      }
      const displayMap = new google.maps.Map(<HTMLElement>document.getElementById('map'), {
        center:centerLocation,
        zoom:10
      })
      const marker = new google.maps.Marker({
        position:centerLocation,
        map:displayMap,
      })
      var information = new google.maps.InfoWindow({
        content: '<div><div class="userPostDetails"><h1>User Name : </h1><img src="user.image"></div><div class="post-detailes"><img src="post.image"><p>post content</p><p>Publish Date</p> <p>Number Of Likes ""</p><button>Like</button></div></div>'
     });
     
     marker.addListener('click', function() {
        information.open(displayMap, marker);
     });
    }
    );
  }

}
