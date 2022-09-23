import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

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
      const location = {
        lng:34.841011,
        lat:32.081669
      }
      const map = new google.maps.Map(<HTMLElement>document.getElementById('map'), {
        center:location,
        zoom:16
      })
    }
    );
  }

}
