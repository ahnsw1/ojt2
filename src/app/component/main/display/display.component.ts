import { Component, Input, OnInit } from '@angular/core';
import { WebsocketService } from '../../../service/websocket.service';
import * as d3 from 'd3';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  constructor(private wsService: WebsocketService) { }

  @Input() index: number = 0;
  @Input() deviceInfos: any = {};
  ecg: string = "ecg";
  resp: string = "res";
  motionStatus: number = 4;

  ngOnInit(): void {
    this.wsService.subject.subscribe(observer => {
      if (observer.dv === this.deviceInfos.deviceAddress) {
        
        //for hr
        document.querySelector(`#hr_${this.index} .value`)!.innerHTML = `${observer.dp.hr.current}bpm`;
        document.querySelector(`.footer_${this.index} .data-heart-min-value`)!.innerHTML = observer.dp.hr.min;
        document.querySelector(`.footer_${this.index} .data-heart-max-value`)!.innerHTML = observer.dp.hr.max;

        //resperation rate
        if (observer.dp["93"]) {
          document.querySelector(`.footer_${this.index} .data-resp-value`)!.innerHTML = observer.dp["93"];
          document.querySelector(`#resp_${this.index} .value`)!.innerHTML = observer.dp["93"] + "bpm";
        }

        //temperate
        else if (observer.dp["AB"]) {
          document.querySelector(`.footer_${this.index} .data-temp-value`)!.innerHTML = (observer.dp["AB"] / 10).toString();
          document.querySelector(`#temp_${this.index} .value`)!.innerHTML = (observer.dp["AB"] / 10).toString() + "℃";
        }

        //ecg옆의 큰 숫자 표시하기
        else if (observer.dp["92"]) {
          document.querySelector(`#ecg_${this.index} .value`)!.innerHTML = observer.dp["92"];
        }

        //motion
        else if (observer.dp["B8"] !== undefined) {
          let status = 4;
          switch (observer.dp["B8"]) {
            case 0:
              status = 0
              break;
            case 1:
              status = 1;
              break;
            case 2:
              status = 2;
              break;
            case 3:
              status = 3;
              break;
            default:
              status = 4;
              break;
          }
          this.motionStatus = status;
        }

        //arrhythmia detected
        if (observer.arrhythmiaList) {
          this.wsService.annotationSubject.next(
            { [this.index]: observer.arrhythmiaList }
          )
        }
      }
    })
  }
}

export interface IData {
  val: number | undefined;
  ts: number;
}