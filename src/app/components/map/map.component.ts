import { Component, OnInit } from '@angular/core';
import MapConfig from '../../../assets/map-config.json';
import { MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  center: google.maps.LatLngLiteral;
  zoom: number;
  markers: any[];

  constructor() {
    this.center = MapConfig.center;
    this.zoom = MapConfig.zoom;
    this.markers = MapConfig.markers;
  }

  ngOnInit() {
  }
}
