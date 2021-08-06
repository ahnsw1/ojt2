import { Component, OnInit, Type } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
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
      newDiv.style.width = `${width}px`;
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
        
        childDiv.style.padding = '5px';
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
            grandChildDiv.style.padding = '5px';
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

  ngOnDestroy() {
    this.closeSocket();
  }
}
