import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-motion',
  templateUrl: './motion.component.html',
  styleUrls: ['./motion.component.css']
})
export class MotionComponent implements OnInit {

  @Input() currentIndex: number = 4;
  @Input() currentMotion: boolean = false;
  currentIcon: string = "";

  constructor() { }

  ngOnInit(): void {
    switch (this.currentIndex) {
      case 0:
      this.currentIcon = "fa-bed";
        break;
      case 1:
        this.currentIcon = "fa-male";
        break;
      case 2:
        this.currentIcon = "fa-walking";
        break;
      case 3:
        this.currentIcon = "fa-running";
        break;
      default:
        this.currentIcon = '';
        break;
    }
  }

}
