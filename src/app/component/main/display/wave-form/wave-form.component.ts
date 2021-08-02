import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { WebsocketService } from '../../../../service/websocket.service';
import { IData } from '../display.component';

@Component({
  selector: 'app-wave-form',
  templateUrl: './wave-form.component.html',
  styleUrls: ['./wave-form.component.css']
})
export class WaveFormComponent implements OnInit {

  @Input() title: string = '';
  @Input() index: number = 0;
  @Input() deviceInfos: any = {};

  ecgData: IData[] = [];
  resData: IData[] = [];
  ecgIndex: number = 0;
  resIndex: number = 0;

  constructor(private wsService: WebsocketService) {
  }

  ngOnInit(): void {
    let totalCount = Math.floor(document.getElementsByClassName("line_chart")[0].getBoundingClientRect().width * 5 / 4);

    for (let i = 0; i < totalCount; i++) {
      this.ecgData[i] = { val: undefined, ts: i * 8 };
    }

    for (let i = 0; i < totalCount / 2; i++) {
      this.resData[i] = { val: undefined, ts: i * 40 };
    }

    this.wsService.subject.subscribe(observer => {
      if (observer.dv === this.deviceInfos.deviceAddress) {
        switch (this.title) {
          case "ecg":
            //뒤에 20개 이상 남았을 때
            if (this.ecgData.length - this.ecgIndex >= 20) {
              for (let i = 0; i < 5; i++) {
                this.ecgData[this.ecgIndex + i] = {
                  ts: (this.ecgIndex + i) * 8,
                  val: observer.dp.ecg[i]
                };
              }

              this.ecgIndex += 5;

              for (let i = 0; i < 15; i++) {
                this.ecgData[this.ecgIndex + i] = { ts: (this.ecgIndex + i) * 8, val: undefined };
              }

            }
            //뒤에 20개 미만, 5개 초과 남았을 때
            else if (this.ecgData.length - this.ecgIndex < 20 && this.ecgData.length - this.ecgIndex > 5) {
              for (let i = 0; i < 5; i++) {
                this.ecgData[this.ecgIndex + i] = {
                  ts: (this.ecgIndex + i) * 8,
                  val: observer.dp.ecg[i]
                };
              }
              this.ecgIndex += 5;

              for (let i = 0; i < this.ecgData.length - this.ecgIndex; i++) {
                this.ecgData[this.ecgIndex + i] = { ts: (this.ecgIndex + i) * 8, val: undefined };
              }
            }
            //뒤에 5개 이하 남았을 때
            else {
              let a = 0;
              for (let i = 0; i < 5; i++) {
                if (i < this.ecgData.length - this.ecgIndex) {
                  this.ecgData[this.ecgIndex + i] = {
                    ts: (this.ecgIndex + i) * 8,
                    val: observer.dp.ecg[i]
                  };
                } else {
                  a = i;
                  break;
                }
              }

              this.ecgIndex = 0;
              for (let i = 0; i < 5 - a; i++) {
                this.ecgData[this.ecgIndex + i] = {
                  ts: (this.ecgIndex + i) * 8,
                  val: observer.dp.ecg[a + i]
                }
              }
              this.ecgIndex += 5 - a;
            }

            this.drawChart(this.ecgData, this.index);
            break;

          case "res":
            this.resData[this.resIndex] = { val: observer.dp.F1, ts: this.resIndex * 40 };
            
            //뒤에 11개 이상 남았을 때
            if (this.resData.length - this.resIndex >= 11) {
              for (let i = 1; i < 11; i++) {
                this.resData[this.resIndex + i] = { val: undefined, ts: (this.resIndex + i) * 40 }
              }
              this.resIndex++;
            }
            //뒤에 11개 미만, 2개 이상 남았을 때
            else if (this.resData.length - this.resIndex < 11 && this.resData.length - this.resIndex > 1) {
              for (let i = 1; i < this.resData.length - this.resIndex; i++) {
                this.resData[this.resIndex + i] = { val: undefined, ts: (this.resIndex + i) * 40 }
              }
              this.resIndex++;
            }
            //뒤에 2개 미만 남았을 때
            else {
              this.resIndex = 0;
            }
            this.drawChart(this.resData, this.index);
            break;
          default:
            break;
        }
      }
    })
  }

  drawChart(data: IData[], index: number) {
    const div = document.getElementById(`${this.title}_${index}`)!;

    const width = div.getBoundingClientRect().width;
    const height = div.getBoundingClientRect().height;
    const margin = { top: 20, bottom: 20 };

    d3.select(`#${this.title}_${index} svg`).remove();

    const svg: any = d3.select(`#${this.title}_${index} div.chart`)
      .append("svg")
      .attr("class", "prd")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", width).attr("height", height);

    const g: any = svg.append("g")
    // .attr("width", width);

    const xScale: any = d3.scaleTime().range([0, width]);
    const yScale: any = d3.scaleLinear().range([height - margin.top, margin.bottom]);

    xScale.domain(d3.extent(data, d => d.ts));
    yScale.domain(d3.extent(data, d => d.val)).nice();

    const line: any = d3.line()
      .defined((d: any) => !isNaN(d.val))
      .x((d: any) => xScale(d.ts))
      .y((d: any) => yScale(d.val))
      .curve(d3.curveBumpX);

    const chart = g.append("g")
      .attr("class", "chart")
      .attr("width", width);

    chart.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", this.title === "ecg" ? "green" : "white")
      .attr("width", width)
      .attr("stroke-width", "2px")
      .attr("d", line);
  }

}
