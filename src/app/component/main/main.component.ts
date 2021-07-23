import { Component, OnInit, Type } from '@angular/core';
import { Subject } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { map, observeOn } from 'rxjs/operators';
import { WebsocketService } from 'src/app/service/websocket.service';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  date: any;
  wsSubscription: Subscription = new Subscription();
  groupIndex: number = 0;
  spaceIds: string[] = [];
  deviceInfos: any = {};

  constructor(private wsService: WebsocketService, private dataService: DataService) {
    this.dataService.getDeviceIds("AA").then(deviceItems => {
      //소켓통신시작
      this.wsSubscription = this.wsService.createObservableSocket(deviceItems)
        .subscribe();

      //기타 정보 가져오기
      let space;
      this.dataService.getSpaceInGroup(1).then(spaceItems => {
        deviceItems.map((dItem: any) => {
          space = spaceItems.find((sItem: any) => dItem[0]._id === sItem.device);
          this.deviceInfos[space.index] = {
            "_id": space.device,
            "hicardiName": dItem[0].peripheral.customName,
            "deviceAddress": dItem[0].peripheral.id
          };
        })
      });
    });

    setInterval(() => {
      this.date = new Date().toLocaleString();
    }, 500)
  }

  closeSocket() {
    this.wsSubscription.unsubscribe();
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.closeSocket();
  }

}