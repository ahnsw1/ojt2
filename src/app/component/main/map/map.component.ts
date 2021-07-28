import { Component, Input, OnInit } from '@angular/core';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { 

  }

  zoom = 12;
  
  @Input() width: number = 0;
  @Input() height: number = 0;

  ngOnInit(): void {
    //위치 정보를 가져와서 lat/lng를 적용해준다.
  }



}
