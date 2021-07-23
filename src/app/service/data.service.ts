import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = "http://192.168.0.3:5000"
  }

  getSpaces = () => this.http.get<any>(`${this.url}/spaces`).toPromise();
  getGroups = () => this.http.get<any>(`${this.url}/groups`).toPromise();
  getDevices = () => this.http.get<any>(`${this.url}/devices`).toPromise();

  getDeviceIds(groupName: string) {
    return this.getGroups()
      .then(groupItem => {
        if (groupItem.result) {
          return groupItem.data.filter((i: any) => i.name === groupName);
        }
      })
      .then(groupItem => {
        return this.getSpaces()
          .then(spaceItem => {
            if (spaceItem.result) {
              return spaceItem.data.filter((i: any) => groupItem[0].index === i.groupIndex);
            }
          })
          .then(spaceItem => {
            return this.getDevices()
              .then(deviceItem => {
                if (deviceItem.result) {
                  return spaceItem.map((sItem: any) => deviceItem.data.filter((dItem: any) => sItem.device === dItem._id))
                }
              })
          })
      })
  }

  getSpaceInGroup(groupIndex: number) {
    return this.getSpaces().then(spaces => {
      if (spaces.result) {
        return spaces.data.filter((item: any) => item.groupIndex === groupIndex);
      }
    })
  }
}
