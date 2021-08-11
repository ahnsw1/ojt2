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

    // this.getContextMenu(data);
    this.getContextMenu1(data);
  }

  ngOnDestroy() {
    this.closeSocket();
  }

  getContextMenu(data: any) {
    const width = 120;

    document.addEventListener("contextmenu", event => {
      event.preventDefault();

      const newDiv = document.createElement('div');
      let grandChildContainer: HTMLElement;

      if (((event.target as Element).getAttribute("class")?.includes("contextmenu") || (event.target as Element).getAttribute("class")?.includes("contextchild"))) {
        //안쪽을 클릭했을 경우
        if ((event.target as Element).getAttribute("class")?.includes("contextchild") || (event.target as Element).getAttribute("hasChild") === "false") {
          alert('실행1');
        }
        return;
      }

      if (document.getElementById("newDiv") || document.getElementById("grandChildContainer")) {
        document.getElementById("newDiv")?.remove();
        document.getElementById("grandChildContainer")?.remove();
      }

      newDiv.setAttribute("id", "newDiv");
      newDiv.style.position = "absolute";
      newDiv.style.background = 'rgba(29, 53, 87)';
      newDiv.style.textAlign = 'center';
      newDiv.style.fontSize = '.8rem';
      newDiv.style.border = '0.1px solid white';
      newDiv.style.borderRadius = '10px';
      newDiv.style.zIndex = '1';

      for (let i = 0; i < 5; i++) {
        const childDiv = document.createElement("div");
        childDiv.setAttribute("width", "100%");
        childDiv.setAttribute("id", `childDiv_${i}`)
        childDiv.style.height = "16px";
        childDiv.classList.add("contextmenu");
        childDiv.classList.add("selectedMenu");

        if (i !== 2) {
          childDiv.setAttribute("hasChild", 'true');
        } else {
          childDiv.setAttribute("hasChild", 'false');
        }

        childDiv.style.padding = '5px 10px';
        childDiv.style.color = 'white';
        childDiv.textContent = `설정 ${i}번째`;
        newDiv.append(childDiv);
      }

      document.body.appendChild(newDiv);

      //하위 설정창 표시하기
      for (let i = 0; i < 5; i++) {
        const selectedChildDiv = document.getElementById(`childDiv_${i}`)

        selectedChildDiv!.addEventListener("mouseover", e => {
          document.getElementById("grandChildContainer")?.remove();
          grandChildContainer = document.createElement("div");
          grandChildContainer.setAttribute("id", "grandChildContainer");
          grandChildContainer.classList.add(`${i}`);
          grandChildContainer.style.position = 'absolute';
          grandChildContainer.style.top = `${selectedChildDiv?.getBoundingClientRect().top}px`;
          grandChildContainer.style.left = `${selectedChildDiv?.getBoundingClientRect().right! - 2}px`;
          grandChildContainer.style.color = 'white';
          grandChildContainer.style.background = 'rgba(29, 53, 87)';
          grandChildContainer.style.fontSize = '.8rem'
          grandChildContainer.style.borderRadius = '10px';
          grandChildContainer.style.zIndex = '3';
          grandChildContainer.style.border = '.1px solid white';

          for (let j = 0; j < 5; j++) {
            if (i === 2) {
              break;
            }
            const grandChildDiv = document.createElement("div");
            grandChildDiv.style.width = `${width}px`;
            grandChildDiv.classList.add("contextchild")
            grandChildDiv.setAttribute("hasChild", "false");
            grandChildDiv.style.textAlign = 'center';
            grandChildDiv.style.padding = '5px 10px';
            grandChildDiv.style.height = '16px';
            grandChildDiv.textContent = `하위 설정 ${j} 번째`;
            grandChildContainer.appendChild(grandChildDiv);
          }

          document.body.appendChild(grandChildContainer);
        })

      }

      //가장자리로 갔을 때, 위치이동
      if (window.innerHeight - event.clientY < 26 * 5) {
        newDiv.style.top = `${event.clientY - 26 * 5}px`;
      } else {
        newDiv.style.top = `${event.clientY + 2}px`;
      }

      if (window.innerWidth - event.clientX < width) {
        newDiv.style.left = `${window.innerWidth - width}px`;
      } else {
        newDiv.style.left = `${event.clientX + 2}px`;
      }
    })

    document.addEventListener("mousedown", e => {
      const existDiv = document.getElementById("newDiv");
      if (existDiv) {
        if ((!(e.target as Element).getAttribute("class")?.includes("contextmenu") && !(e.target as Element).getAttribute("class")?.includes("contextchild"))) {
          document.getElementById("grandChildContainer")?.remove();
          document.getElementById("newDiv")?.remove();
        } else {
          //안쪽을 클릭했을 경우
          if ((e.target as Element).getAttribute("hasChild") === "false") {
            alert("실행2");
            document.getElementById("grandChildContainer")?.remove();
            document.getElementById("newDiv")?.remove();
          }
        }
      }
    })

    document.addEventListener("mouseover", e => {
      if (e.target instanceof HTMLElement) {
        if (e.target.getAttribute("class")?.includes("contextmenu")) {
          document.querySelectorAll(".selectedMenu")?.forEach(elem => {
            if (elem.getAttribute("class")?.includes("selectedMenu")) {
              elem.classList.remove("selectedMenu");
              (elem as HTMLElement).style.opacity = '1';
            }
          })
          e.target.classList.add("selectedMenu");
          e.target.style.opacity = '.7';

          //하위 메뉴가 아래쪽 가장자리에서 열릴때 올리기
          if (document.querySelector(".contextchild") && window.innerHeight < e.target.getBoundingClientRect().top + document.querySelector(".contextchild")!.getBoundingClientRect().height * 5) {
            (document.querySelector("#grandChildContainer") as HTMLElement).style.top = `${window.innerHeight - document.querySelector("#grandChildContainer")!.getBoundingClientRect().height}px`;
          }

          //하위 메뉴가 오른쪽 가장자리에서 열릴 때 옆으로 열기
          if (document.querySelector(".contextchild") && window.innerWidth < document.querySelector(".contextchild")!.getBoundingClientRect().left + document.querySelector(".contextchild")!.getBoundingClientRect().width) {
            (document.querySelector("#grandChildContainer") as HTMLElement).style.left = `${e.target.getBoundingClientRect().left - document.querySelector("#grandChildContainer")!.getBoundingClientRect().width}px`;
          }


        }
        else if (e.target.getAttribute("class")?.includes("contextchild")) {
          e.target.style.opacity = '.7';
        }
      }

      document.addEventListener("mouseout", event => {
        if (e.target instanceof HTMLElement && (e.target.getAttribute("class")?.includes("contextchild"))) {
          e.target.style.opacity = '1';
        }
      })
    })
  }

  /**
   * 
   * @param data : {
   *    [index: number]: {
   *        "title": string,
   *        "action": string, //javascript code. 없으면 빈값
   *        "subtitle" : data //없으면 빈값.
   *    }
   * }
   */
  getContextMenu1(data: any) {
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
   * data: {
   *  0: {"title":"", "subtitle":""},
   *  1: {"title":""},
   *  2: {"title":"", "subtitle":""}
   * }
   * @param data 
   */
  private createMenu(data: any, depth: number, event: MouseEvent, currentIndex?: number): Element {
    const container = document.createElement("div");
    let parallelPadding = 10;
    let verticalPadding = 5;
    let minWidth = 50;

    container.style.borderRadius = '8px';
    container.style.border = '.1px solid white';
    container.style.backgroundColor = '#4a4e69';
    container.style.width = 'max-content';
    container.style.minWidth = `${minWidth}px`;
    container.style.textAlign = 'center';
    container.style.color = 'white';
    container.style.position = 'absolute';
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
        
        if (i === keys.length - 1) {
          item.style.borderRadius = '0 0 8px 8px';
        }
      } 
      else { 
        item.style.borderRadius = '8px 8px 0 0';
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
              // (observer.target as Element).classList.add("selected");
              (observer.target as Element).appendChild(this.createMenu(data[i].subtitle, depth + 1, observer, i));
            }
            
            (observer.target as HTMLElement).style.backgroundColor = 'black';

            for (let j = 0; j < keys.length; j++) {
              if (i !== j) {
                // document.querySelector(`.depth_${depth}_${j}`)?.classList.remove("selected");
                (document.querySelector(`.depth_${depth}_${j}`) as HTMLElement).style.backgroundColor = 'rgb(74, 78, 105)';
              }
            }

          }
          return ;
        })
    }
    return container;
  }
}
