import { Component, OnInit, Type } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { debounceTime, delay, last, map, pluck, takeLast, tap, throttle, throttleTime, timeout } from 'rxjs/operators';
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
  mapWidth: number = 0;
  mapHeight: number = 0;

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
    this.mapWidth = document.getElementById("map")!.getBoundingClientRect().width;
    this.mapHeight = document.getElementById("map")!.getBoundingClientRect().height;

    //context menu 설정 데이터
    const data: any = {
      0: {
        "title": "no.1",
        "action": "",
        "subtitle": {
          0: {
            "title": "[sub1] no.1", 
            "action":"",
            "subtitle": {
              0: { "title": "[sub1-sub1] no.1", "action": "alert(1_1_1);", "subtitle": "" },
              1: { "title": "[sub1-sub1] no.2", "action": "alert(1_1_2);", "subtitle": "" },
              2: { "title": "[sub1-sub1] no.3", "action": "alert(1_1_3);", "subtitle": "" },
              3: { "title": "[sub1-sub1] no.4", "action": "alert(1_1_4);", "subtitle": "" },
            }
          },
          1: {
            "title": "[sub1] no.2", 
            "action": "",
            "subtitle": {
              0: { "title": "[sub1-sub2] no.1", "action": "alert(1_2_1);", "subtitle": "" },
              1: { "title": "[sub1-sub2] no.2", "action": "alert(1_2_2);", "subtitle": "" },
              2: { "title": "[sub1-sub2] no.3", "action": "alert(1_2_3);", "subtitle": "" },
              3: { "title": "[sub1-sub2] no.4", "action": "alert(1_2_4);", "subtitle": "" },
            }
          },
          2: {
            "title": "[sub1] no.3",
            "action": "",
            "subtitle": {
              0: { "title": "[sub1-sub3] no.1", "action": "alert(1_3_1);", "subtitle": "" },
              1: { "title": "[sub1-sub3] no.2", "action": "alert(1_3_2);", "subtitle": "" },
              2: { "title": "[sub1-sub3] no.3", "action": "alert(1_3_3);", "subtitle": "" },
              3: { "title": "[sub1-sub3] no.4", "action": "alert(1_3_4);", "subtitle": "" },
            }
          }
        }
      },
      1: {
        "title": "no.2",
        "action": "",
        "subtitle": {
          0: {
            "title": "[sub2] no.1", 
            "action": "" ,
            "subtitle": {
              0: { "title": "[sub2-sub1] no.1", "action": "alert(2_1_1);", "subtitle": "" },
              1: { "title": "[sub2-sub1] no.2", "action": "alert(2_1_2);", "subtitle": "" },
              2: { "title": "[sub2-sub1] no.3", "action": "alert(2_1_3);", "subtitle": "" },
              3: { "title": "[sub2-sub1] no.4", "action": "alert(2_1_4);", "subtitle": "" },
            }
          },
          1: {
            "title": "[sub2] no.2", 
            "action": "alert(2_2);",
            "subtitle": ""
          },
          2: {
            "title": "[sub2] no.3",
            "action": "",
            "subtitle": {
              0: { "title": "[sub2-sub3] no.1", "action": "alert(2_3_1);", "subtitle": "" },
              1: { "title": "[sub2-sub3] no.2", "action": "alert(2_3_2);", "subtitle": "" },
              2: { "title": "[sub2-sub3] no.3", "action": "alert(2_3_3);", "subtitle": "" },
              3: { "title": "[sub2-sub3] no.4", "action": "alert(2_3_4);", "subtitle": "" },
            }
          }
        }
      },

    };

    this.getContextMenu(data);
  }

  ngOnDestroy() {
    this.closeSocket();
  }

  /**
   * 컨텍스트 메뉴 만들기
   * @param data : {
   *    [index: number]: {
   *        "title": string,
   *        "action": string, //javascript code. 없으면 빈값
   *        "subtitle" : data //없으면 빈값.
   *    }
   * }
   */
  getContextMenu(data: any) {
    document.addEventListener("contextmenu", event => {
      event.preventDefault();
      document.querySelector("#depth_1")?.remove();
      document.body.appendChild(this.createMenu(data, 1, event));
    })

    document.addEventListener("click", event => {
      //외부클릭시 없애기
      if(!(event.target as Element).classList.value.includes("depth")){
        document.querySelector("#depth_1")?.remove();
        return;
      }
      //내부 클릭시
      if ((event.target as HTMLElement).getAttribute("action")?.length !== 0){
        new Function((event.target as HTMLElement).getAttribute("action")!)();
      }
    })

  }

  /**
   * 컨텍스트 메뉴 만들기(재귀함수)
   * data: {
   *  0: {"title":"", "subtitle":""},
   *  1: {"title":""},
   *  2: {"title":"", "subtitle":""}
   * }
   * @param data 
   */
  private createMenu(data: any, depth: number, event: MouseEvent, currentIndex?: number): Element {
    const container = document.createElement("div");
    let parallelPadding = 20;
    let verticalPadding = 5;
    let minWidth = 50;

    container.style.border = '.1px solid white';
    container.style.backgroundColor = '#f0efeb';
    container.style.width = 'max-content';
    // container.style.minWidth = `${minWidth}px`;
    container.style.textAlign = 'center';
    container.style.color = 'black';
    // container.style.fontWeight = '350';
    container.style.position = 'absolute';
    container.style.fontSize = '.9rem';
    container.style.zIndex = `${depth}`;
    container.style.cursor = 'pointer';

    container.classList.add("container");

    if (depth > 1) {
      container.style.left = `${document.querySelector(`#depth_${depth - 1}`)!.getBoundingClientRect().width - 4}px`;
      container.style.top = `${(event.target as Element).getBoundingClientRect().height * currentIndex!}px`;
    } else {
      container.style.left = `${event.clientX + 4}px`;
      container.style.top = `${event.clientY}px`;
    }

    container.setAttribute("id", `depth_${depth}`)

    const keys = Object.keys(data);

    for (let i = 0; i < keys.length; i++) {
      container.style.textAlign = 'center';

      const item = document.createElement("div");
      item.setAttribute("action", data[i].action);
      item.classList.add(`depth_${depth}_${i}`)
      item.classList.add("item");
      item.textContent = data[i].title;

      if (i !== 0) {
        item.style.borderTop = '1px solid white';
      } 

      item.style.padding = `${verticalPadding}px ${parallelPadding}px`;
      item.style.minWidth = `${minWidth}px`;
      item.style.cursor = 'pointer';

      container.appendChild(item);

      fromEvent(item, "mouseover").pipe().subscribe( (observer: any) => {
          if ((observer.target as Element).classList.contains(`depth_${depth}_${i}`)) {
            if ((observer.target as Element).classList.contains(`depth_${depth}_${i}`)) {
              document.querySelectorAll(`#depth_${depth + 1}`)?.forEach(element => {
                element.remove();
              });
            }
            if (data[i].subtitle) {
              (observer.target as Element).appendChild(this.createMenu(data[i].subtitle, depth + 1, observer, i));
            }
            
            (observer.target as HTMLElement).style.backgroundColor = 'lightgray';

            for (let j = 0; j < keys.length; j++) {
              if (i !== j) {
                (document.querySelector(`.depth_${depth}_${j}`) as HTMLElement).style.backgroundColor = '#f0efeb';
              }
            }
          }
          return ;
        })
    }
    return container;
  }
}
