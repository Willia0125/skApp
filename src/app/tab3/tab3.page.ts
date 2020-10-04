import { Component } from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  map: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  infoWindows= [];
  markers: any = [
  {
    title: "Scott's Kitchen",
    latitude: "39.310100",
    longitude: "-94.682570"
  }
  ];

  constructor() {}

  ionViewDidEnter() {
    this.showMap();
  }

  showMap() {
    const location = new google.maps.LatLng(39.310100, -94.6829);
    const options = {
      center: location,
      zoom: 18,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);

    }
}
