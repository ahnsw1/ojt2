import { Injectable } from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  ws!: WebSocket;
  socketIsOpen = 1;
  subject: Subject<any> = new Subject();
  annotationSubject: Subject<any> = new Subject();

  constructor() { 
  }

  createObservableSocket(deviceList: any): Observable<any> 
  {
    const addressList = deviceList.map((item: any) => {
      if (item[0].isRunning) {
        return item[0].peripheral.id
      }
    }).filter((item: any) => item !== undefined);

    this.ws = new WebSocket('ws://192.168.0.3:5000');

    return new Observable(
      observer => {
        this.ws.onmessage = event => {
          //처음 연결되었을 때 central-connect 메시지 보내기
          if (JSON.parse(event.data).type === 'connected') {
            const message = {
              "type": "central-connect",
              "data": { "account": `${JSON.parse(localStorage.getItem("user")!).data._id}` }
            };
            this.sendMessage(JSON.stringify(message));
          }
          //연결 응답 왔을 때 devices-subscription 보내기
          else if (JSON.parse(event.data).type === 'connection-confirmed') {
            const message = {
              "type": "devices-subscription",
              "data": { "account": `${JSON.parse(localStorage.getItem("user")!).data._id}`, "devices": addressList }
            };
            this.sendMessage(JSON.stringify(message));
          }
          else if (JSON.parse(event.data).type === "data") {
            this.subject.next(JSON.parse(event.data).data)
          }
          observer.next(event.data);
        }
        this.ws.onerror = event => observer.error(event);
        this.ws.onclose = () => observer.complete();

        return () => this.ws.close(1000, "the user disconnected");
      }
    );
  }

  sendMessage(message: string): string {
    if (this.ws.readyState === this.socketIsOpen) {
      this.ws.send(message);
      return `sent to server ${message}`;
    } else {
      return 'Message was not sent - the socket is closed';
    }
  }
}

